
let detectable = true;
let confidenceValue = 7.5;
let cooldownTime = 500;
let detectCount = 0;
let detectThreshold = 5;
const config = {
  video: { width: 320, height: 240, fps: 30 }
};

const landmarkColors = {
  thumb: 'red',
  indexFinger: 'blue',
  middleFinger: 'yellow',
  ringFinger: 'green',
  pinky: 'pink',
  palmBase: 'white'
};


const gestureStrings = {
  'thumbs_up': '👍',
  'victory': '✌🏻'
};

async function main() {

  const video = document.querySelector("#pose-video");
  const canvas = document.querySelector("#pose-canvas");
  const ctx = canvas.getContext("2d");
  const resultLayer = document.querySelector("#pose-result");

  // configure gesture estimator
  // add "✌🏻" and "👍" as sample gestures
  const knownGestures = [
    fp.Gestures.VictoryGesture,
    fp.Gestures.ThumbsUpGesture
  ];
  const GE = new fp.GestureEstimator(knownGestures);

  // load handpose model
  const model = await handpose.load();
  console.log("Handpose model loaded");

  // main estimation loop
  const estimateHands = async () => {

    // clear canvas overlay
    ctx.clearRect(0, 0, config.video.width, config.video.height);

    const predictions = await model.estimateHands(video, true);

    for (let i = 0; i < predictions.length; i++) {


      // draw colored dots at each predicted joint position
      for (let part in predictions[i].annotations) {
        for (let point of predictions[i].annotations[part]) {
          drawPoint(ctx, point[0], point[1], 2, landmarkColors[part]);
        }
      }

      // now estimate gestures based on landmarks
      // using a minimum confidence of 7.5 (out of 10)
      const est = GE.estimate(predictions[i].landmarks, confidenceValue);
      let distance = 1000;

      if (est.gestures.length > 0) {

        // find gesture with highest confidence
        let result = est.gestures.reduce((p, c) => {
          return (p.confidence > c.confidence) ? p : c;
        });

        // if thumbs-up gesture detected and is detectable, start counting to detectCount
        if (result.name == 'thumbs_up' && detectable) {
          detectCount++;
          console.log(detectCount);
          // if count is above detection threshold go to next slide and cooldown
          if (detectCount > detectThreshold) {
            Reveal.next();
            detectable = false;
            console.log('👍')
            detectCount = 0;
            setTimeout(activateDetection, cooldownTime);
          }
          // else if peace / victory sign go to previous page
        } else if (result.name == 'victory' && detectable) {
          detectCount++;
          console.log(detectCount);
          if (detectCount > detectThreshold) {
            Reveal.prev();
            detectable = false;
            console.log('✌🏻')
            detectCount = 0;
            setTimeout(activateDetection, cooldownTime);
          }
        }
      } else {
        detectCount = 0;
      }
    }

    // ...and so on
    setTimeout(() => { estimateHands(); }, 1000 / config.video.fps);
  };

  estimateHands();
  console.log("Starting predictions");
}

async function initCamera(width, height, fps) {

  const constraints = {
    audio: false,
    video: {
      facingMode: "user",
      width: width,
      height: height,
      frameRate: { max: fps }
    }
  };

  const video = document.querySelector("#pose-video");
  video.width = width;
  video.height = height;
  // set canvas to height
  const canvas = document.querySelector("#pose-canvas");
  canvas.width = width;
  canvas.height = height;

  // get video stream
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;

  return new Promise(resolve => {
    video.onloadedmetadata = () => { resolve(video) };
  });
}

function drawPoint(ctx, x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function activateDetection() {
  detectable = true;
  console.log("activateDetection");
}

function sliderControl(id, value) {
  switch (id) {
    case 0:
      confidenceValue = value;
      break;
    case 1:
      cooldownTime = value;
      break;
    default:
      detectThreshold = value;
  }
  console.log(value);
}

window.addEventListener("DOMContentLoaded", () => {

  initCamera(
    config.video.width, config.video.height, config.video.fps
  ).then(video => {
    video.play();
    video.addEventListener("loadeddata", event => {
      console.log("Camera is ready");
      main();
    });
  });
});
