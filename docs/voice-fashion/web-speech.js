// This script is adapted from two demos, and should probably be 
// encapsulated properly into two classes(?) and separate .js files.

let isEnabled = true;
let isListening = false;
let isVisualizing = false;
let $status = document.querySelector('#status');
let $transcription = document.querySelector('#transcription');
let $confidence = document.querySelector('#confidence');
let $listenButton = document.querySelector('#listen_toggle');
let $continueButton = document.querySelector('a.primary-button');
// let $interim = document.querySelector('#interim');
let $measurements = document.querySelector('#measurements');
let $li = {
  neck: document.querySelector('li.neck'),
  chest: document.querySelector('li.chest'),
  sleeve: document.querySelector('li.sleeve'),
  waist: document.querySelector('li.waist')
}
let $in = {
  neck: document.querySelector('li.neck .in'),
  chest: document.querySelector('li.chest .in'),
  sleeve: document.querySelector('li.sleeve .in'),
  waist: document.querySelector('li.waist .in'),
};
let $cm = {
  neck: document.querySelector('li.neck .cm'),
  chest: document.querySelector('li.chest .cm'),
  sleeve: document.querySelector('li.sleeve .cm'),
  waist: document.querySelector('li.waist .cm'),
}

// WEB SPEECH

// Web Speech API code adapted from Aurelio de Rosa's example: 
// https://www.audero.it/demo/web-speech-api-demo.html

// Test browser support
window.SpeechRecognition = window.SpeechRecognition        ||
                          window.webkitSpeechRecognition  ||
                          null;

if (window.SpeechRecognition === null) {
  isEnabled = false;
  $status.textContent = "🛑 The Web Speech API is only supported in Chrome. 😞";
} else {
  let recognizer = new window.SpeechRecognition();
  // Listen continuously, even if the user pauses
  recognizer.continuous = true;
  // Start recognizing
  recognizer.onresult = function(e) {
    $transcription.textContent = '';
    for (var i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) {
        $transcription.classList.add('final');
        $transcription.textContent = e.results[i][0].transcript;
        $confidence.textContent = '(Confidence: ' + e.results[i][0].confidence + ')';
        processIntents(e.results[i][0].transcript);
      } else {
        $transcription.textContent += e.results[i][0].transcript;
        if ($confidence.textContent !== '•••') $confidence.textContent = '•••';
        if ($transcription.classList.contains('final')) $transcription.classList.remove('final');
        processIntents(e.results[i][0].transcript);
      }
    }
  };
  // Listen for errors
  recognizer.onerror = function(e) {
    $confidence.textContent = "⚠️ We couldn't hear you. Try again? "+e.message;
  }

  let startRecognizing = function() {
    // recognizer.interimResults = $interim.checked;
    recognizer.interimResults = true;
    try {
      recognizer.start();
      console.log("Recognition started...");
      recognizer.onend = () => {
        console.log("Continue listening...");
        recognizer.start();
      }
    } catch(exception) {
      console.log("⚠️ Recognition error: "+exception.message);
    }
  };

  let stopRecognizing = function() {
    recognizer.stop();
    recognizer.onend = () => {
      console.log("(override the recognition restart)");
    }
    console.log("Recognition stopped.");
  }

  let makeFraction = function(valueString) {
    if (valueString.indexOf('.') == -1) {
      return valueString;
    } else {
      const v = valueString.split('.');
      let frac = '';
      // if not a clean fraction, round it
      if (["125","25","375","5","625","75","875"].indexOf(v[1]) == -1) {
        if (('.'+v[1])>=0.9375) {
          // it rounds up to 1
          return ''+(v[0]+1);
        } else {
          // round to nearest fraction
          v[1] = (''+Math.round(("."+v[1])*8)/8).substr(2);
        }
      }
      switch (v[1]) {
        case "125":
          frac = ' &frac18;';
          break;
        case "25":
          frac = ' &frac14;';
          break;
        case "375":
          frac = ' &frac38;';
          break;
        case "5":
          frac = ' &frac12;';
          break;
        case "625":
          frac = ' &frac58;';
          break;
        case "75":
          frac = ' &frac34;';
          break;
        case "875":
          frac = ' &frac78;';
          break;
        default:
          break;
      }
      return ''+v[0]+frac;
    }
  }

  let updateMeasure = function(whichMeasure, value, units) {
    // If clearing value, make it empty
    if (+value === 0) {
      $in[whichMeasure].dataset.value = 0;
      $in[whichMeasure].textContent = '';
      $cm[whichMeasure].textContent = '';
      $li[whichMeasure].classList.add('empty');
    } else if ($li[whichMeasure].classList.contains('empty')) {
      $li[whichMeasure].classList.remove('empty');
    }
    // Update the inches and cm at the same time and keep full value in data-value
    if ((units === "in") && ($in[whichMeasure].dataset.value != value)) {
      $in[whichMeasure].dataset.value = +value;
      $in[whichMeasure].innerHTML = makeFraction(''+value);
      $cm[whichMeasure].textContent = ""+Math.round((value*2.54)*100)/100;
    } 
    if ((units === "cm") && ($in[whichMeasure].dataset.value != value/2.54)) {
      $in[whichMeasure].dataset.value = value/2.54;
      $in[whichMeasure].innerHTML = makeFraction(''+(value/2.54));
      $cm[whichMeasure].textContent = value;
    } 
    // Lock or unlock the continue button
    if (document.querySelectorAll('li.empty').length === 0) {
      $continueButton.classList.remove('disabled');
    } else {
      $continueButton.classList.add('disabled');
    }
  }

  let resetScreen = function() {
    console.log("🧹 clearing all measurements");
    $transcription.textContent = '(Nothing said yet...)';
    $confidence.textContent = '•••';
    updateMeasure('neck', 0, 'in');
    updateMeasure('chest', 0, 'in');
    updateMeasure('sleeve', 0, 'in');
    updateMeasure('waist', 0, 'in');
  }

  let processIntents = function(speechText) {
    // called when the recognition is final
    
    // Match measurements
    let intentRegex = new RegExp(/(neck|nick|next|chest|chaise|chaste|justice|waist|waste|wasted|waze|weight|sleeve|sleep|sleeves|sleeps|sneeze)(?: size| length)? (?:is |measures )?(?:about )?(?:a )?(?:size |sizes )?\d+[.]?\d?( (and |in )?(a )?(([1-7][/](2|4|8))|(half|quarter|three quarters)))?\s?(inch|inches|in|cm|centimeters)?|\d+[.]?\d?( (and |in )?(a )?(([1-7][/](2|4|8))|(half|quarter|three quarters)))?\s?(inch|inches|in|cm|centimeters)? (neck|nick|next|chest|chaste|chaise|justice|waist|waste|wasted|waze|weight|sleeve|sleep|sleeves|sleeps|sneeze)/, 'ig')
    // (see https://regexr.com/4vjdu to walk through the above regex)
    const intentResults = Array.from(speechText.matchAll(intentRegex), m => m[0]);
    intentResults.forEach(function(intent) {
      let measurement = "";
      if (/neck|nick|next/i.test(intent)) {
        measurement = "neck";
      } else if (/chest|chaste|justice|chaise/i.test(intent)) {
        measurement = "chest";
      } else if (/waist|waste|weight|wasted|waze/i.test(intent)) {
        measurement = "waist";
      } else if (/sleeve|sleep|sleeves|sleeps|sneeze/i.test(intent)) {
        measurement = "sleeve";
      }
      let amount; 
      if (/\d+/.test(intent)) {
        // get just the number and fraction
        amount = intent.match(/\d+[.]?\d?( (and |in )?(a )?(([1-7][/](2|4|8))|(half|quarter|three quarters)))?/)[0];
        // replace the fraction with string of decimal
        amount = amount.replace("1/8", ".125");
        amount = amount.replace(/1\/4|2\/8|quarter/i, ".25");
        amount = amount.replace("3/8", ".375");
        amount = amount.replace(/1\/2|2\/4|4\/8|half/i, ".5");
        amount = amount.replace("5/8", ".625");
        amount = amount.replace(/3\/4|6\/8|three quarter(?:s?)/i, ".75");
        amount = amount.replace("7/8", ".875");
        // remove all whitespace, and, a
        amount = amount.replace(/and|in|a|\s+/g,'');
      } else {
        amount = "";
      }
      let units;
      if (/in|inch|inches/i.test(intent)) {
        units = "in";
      } else if (/cm|centimeters/i.test(intent)) {
        units = "cm";
      } else {
        units = "in";
      }
      console.log(measurement,':',amount,units);
      if (amount !== "") {
        let value = "" + amount;
        updateMeasure(measurement, value, units);
        console.log('value is ', value);
      } 
    });

    // Match stop commands
    if (/stop listening|stop recording|end simulation|i'm done|quit creeping on me/i.test(speechText)) {
      toggleListening();
    }

    // Match clear commands
    if (/clear everything|clear all|start over|restart|wipe all|wipe everything/i.test(speechText)) {
      resetScreen();
    }

    // Match switch measurement system commands
    if (/switch (?:back )?to (?:the )?(?:english|inches|metric|centimeters)/i.test(speechText)) {
      if ($measurements.classList.contains('english')) {
        $measurements.classList.remove('english');
        $measurements.classList.add('metric');
      } else {
        $measurements.classList.remove('metric');
        $measurements.classList.add('english');
      }
    }

    // Match continue command
    if (/continue/i.test(speechText)) {
      changeScreens();
    }

    // Load customer profile
    if (/the rock\b|dwayne johnson\b/i.test(speechText)) {
      console.log("Loading profile for THE ROCK");
      updateMeasure('neck', 20, 'in');
      updateMeasure('waist', 35, 'in');
      updateMeasure('chest', 50, 'in');
      updateMeasure('sleeve', 38, 'in');
    } else if (/kim kardashian\b/i.test(speechText)) {
      console.log("Loading profile for Kim Kardashian");
      updateMeasure('neck', 11, 'in');
      updateMeasure('waist', 27, 'in');
      updateMeasure('chest', 38, 'in');
      updateMeasure('sleeve', 31, 'in');
    }
    // if (/welcome back|built like|hello again/i.test(speechText)) {
    //  // this is how it would work if it were a real retrieval
    // }
    
  }

  function toggleListening() {
    isListening = !isListening;
    if (isListening) {
      startRecognizing();
      $status.innerHTML = "<strong>Listening.</strong> Click mic icon or press spacebar to stop.";
      $listenButton.classList.add('active');
      if (!isVisualizing) initVisualizer();
    } else {
      stopRecognizing();
      $status.innerHTML = "<strong>Not listening.</strong> Click mic icon or press spacebar to start.";
      $listenButton.classList.remove('active');
    }
  }

  function changeScreens() {
    if ($continueButton.classList.contains('disabled')) {
      return false;
    }
    // Which screen are we on?
    if (document.body.classList.contains('measure')) {
      // We're on first screen
      document.body.classList.remove('measure');
      document.body.classList.add('receipt');
      toggleListening();
      $continueButton.textContent = 'Start Over';
    } else {
      // We're on second screen
      document.body.classList.remove('receipt');
      document.body.classList.add('measure');
      resetScreen();
      $continueButton.textContent = 'Continue';
    }
  }

  // Start and stop with the space bar
  document.body.addEventListener("keydown", function(e) {
    if (isEnabled && e.code.toLowerCase() === "space") {
      toggleListening();
    }
    if (isEnabled && e.code.toLowerCase() === "escape") {
      if (!document.body.classList.contains('receipt')) {
        // We don't want to reset on the second screen!
        resetScreen();
      }
    }
  });
  $listenButton.addEventListener("click", function(e) {
    console.log("clicked microphone button");
    toggleListening();
  })
  $continueButton.addEventListener("click", function(e) {
    changeScreens();
    return false;
  })

  $status.innerHTML = "<strong>Not listening.</strong> Click mic icon or press spacebar to start.";
}

// AUDIO VISUALIZER

// Wrap in a function, because AudioContext will not start without user interaction
function initVisualizer() {
  // So that we don't init twice
  isVisualizing = true;

  // Test getUserMedia, set up fallbacks, probably unnecessary!
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }
      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    }
  }

  //set up a forked web audio context
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  let source;
  let stream;

  let analyser = audioCtx.createAnalyser();
  analyser.minDecibels = -90;
  analyser.maxDecibels = -10;
  analyser.smoothingTimeConstant = 0.85;

  let gainNode = audioCtx.createGain();

  let canvas = document.querySelector('#waveform');
  let canvasCtx = canvas.getContext("2d");

  // if resizable waveform visualizer...
  // let intendedWidth = document.querySelector('.wrapper').clientWidth;
  // canvas.setAttribute('width', intendedWidth);

  let drawVisual;

  if (navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.');
    var constraints = {audio: true}
    navigator.mediaDevices.getUserMedia (constraints)
      .then(
        function(stream) {
          source = audioCtx.createMediaStreamSource(stream);
          // source.connect(analyser);
          source.connect(gainNode);
          gainNode.connect(analyser);
          
          visualize();
      })
      .catch( function(err) { console.log('The following gUM error occured: ' + err);})
  } else {
    console.log('getUserMedia not supported on your browser!');
  }

  function visualize() {
    let WIDTH = canvas.width;
    let HEIGHT = canvas.height;
    let computedStyle = window.getComputedStyle(canvas, null);

    analyser.fftSize = 2048;
    var bufferLength = analyser.fftSize;
    console.log(bufferLength);
    var dataArray = new Uint8Array(bufferLength);

    console.log(WIDTH, HEIGHT);
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

    var draw = function() {

      drawVisual = requestAnimationFrame(draw);

      // Flatline the waveform if we're not listening
      if(isListening) {
        gainNode.gain.setTargetAtTime(1, audioCtx.currentTime, 0)
      } else {
        gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0)
      }

      analyser.getByteTimeDomainData(dataArray);

      canvasCtx.fillStyle = computedStyle.getPropertyValue('background-color') || 'rgb(0,0,0)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = computedStyle.getPropertyValue('color') || 'rgb(255,255,255)';

      canvasCtx.beginPath();

      var sliceWidth = WIDTH * 1.0 / bufferLength;
      var x = 0;

      for(var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT/2;

        if(i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };

    draw();

  }

}
