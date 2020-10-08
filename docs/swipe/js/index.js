const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
windowHeight = window.innerHeight;
windowWidth = window.innerWidth;
let model = null;
let worldXRange = 0;
let windowXRange = 0;
let videoInterval = 10;
let maxMovementSize = 15;
// Store the hand movement
let movements = [];
let minHorizontal = 10;
let deltaHorizontal = 3;
let detectActive = true;
//reset movement every sec
let reset = setInterval(resetMovement, 1000);
let swipeIndex = 3;
let selectedVideoInput, deviceId;
const config = {
  video: { width: 320, height: 240, fps: 30 },
};

//setup handtracking model parameters
const modelParams = {
  flipHorizontal: true, // flip e.g for video
  maxNumBoxes: 1, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.85, // confidence threshold for predictions.
};

const {
  styler,
  inertia,
  listen,
  pointer,
  value,
  calc,
  tween,
  easing,
} = window.popmotion;
const mix = calc.getValueFromProgress;

const boundaries = document.querySelector(".carousel");
const box = document.querySelector(".item");
const boxes = document.querySelectorAll(".item");
const getBoundariesWidth = () =>
  boundaries.getBoundingClientRect().width - box.getBoundingClientRect().width;
const divStylers = [];
[].forEach.call(boxes, function (div) {
  // do whatever
  divStylers.push(styler(div));
});
function resetMovement() {
  movements = [];
}

async function startVideo(cameraId) {
  const constraints = {
    audio: false,
    video: {
      facingMode: "user",
      width: config.video.width,
      height: config.video.height,
      frameRate: { max: config.video.fps },
      deviceId: cameraId,
    },
  };

  video.width = config.video.width;
  video.height = config.video.height;

  // get video stream
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;
  selectedVideoInput = await stream.getVideoTracks()[0].getSettings().deviceId;
  console.log(selectedVideoInput);
  handTrack.startVideo(video).then(function (status) {
    console.log("video started", status);
    if (status) {
      runDetection();
    }
  });
}

// code snippets lifted from https://github.com/umanghome/swipe-listener/blob/master/index.js
function detectSwipe() {
  // console.log("box: " + getTranslateX(box));
  if (movements.length > 0) {
    let xs = movements[0];
    let xe = movements[movements.length - 1]; // Start and end x-coords

    // Determine left or right
    let diff = xs - xe;
    let swipe = "none";
    if (diff > 0) {
      swipe = "left";
    } else {
      swipe = "right";
    }

    let min = Math.min(...movements);
    let max = Math.max(...movements);
    let distance = 1000;

    // If minimum horizontal distance was travelled
    if (Math.abs(diff) >= minHorizontal) {
      if (swipe == "left") {
        _diff = Math.abs(min - movements[movements.length - 1]);
        if (_diff <= deltaHorizontal && swipeIndex < boxes.length) {
          console.log("swiped left");
          divStylers.forEach((element) =>
            tween({
              from: element.get("x"),
              to: { x: element.get("x") - distance },
              duration: 700,
              ease: easing.backOut,
            }).start(element.set)
          );
          swipeIndex++;
        }
      } else {
        _diff = Math.abs(max - movements[movements.length - 1]);
        if (_diff <= deltaHorizontal && swipeIndex > 1) {
          console.log("swiped right");
          divStylers.forEach((element) =>
            tween({
              from: element.get("x"),
              to: { x: element.get("x") + distance },
              duration: 700,
              ease: easing.backOut,
            }).start(element.set)
          );
          swipeIndex--;
        }
      }
      // clear movement array and pause after swipe
      movements = [];
      detectActive = false;
      setTimeout(activateDetection, 2000);
    }
    // clear movement array when it
    if (movements.length > maxMovementSize) {
      movements.shift();
    }
  }
}

function runDetection() {
  model.detect(video).then((predictions) => {
    // get the middle x value of the bounding box and map to paddle location
    model.renderPredictions(predictions, canvas, context, video);
    if (predictions[0]) {
      let midval = predictions[0].bbox[0] + predictions[0].bbox[2] / 2;
      gamex = document.body.clientWidth * (midval / video.width);
      coordX = gamex.mapRange(0, document.body.clientWidth, 0, 100);
      movements.push(parseFloat(coordX));
      if (detectActive) {
        detectSwipe();
      }
    }
    setTimeout(() => {
      runDetection(video);
    }, videoInterval);
  });
}

// Load the model
handTrack.load(modelParams).then((lmodel) => {
  model = lmodel;
});

// map
function convertToRange(value, srcRange, dstRange) {
  // value is outside source range return
  if (value < srcRange[0] || value > srcRange[1]) {
    return NaN;
  }

  var srcMax = srcRange[1] - srcRange[0],
    dstMax = dstRange[1] - dstRange[0],
    adjValue = value - srcRange[0];
  return (adjValue * dstMax) / srcMax + dstRange[0];
}

function getTranslateX(element) {
  var style = window.getComputedStyle(element);
  var matrix = new WebKitCSSMatrix(style.webkitTransform);
  return matrix.m41;
}

function activateDetection() {
  detectActive = true;
}

async function getVideoOptions() {
  await navigator.mediaDevices.getUserMedia({ video: true });
  await navigator.mediaDevices
    .enumerateDevices()
    .then(function (devices) {
      let videoDeviceSet = new Set(
        devices.filter((device) => device.kind === "videoinput")
      );

      let videoOptions = [...videoDeviceSet];
      let optionList = document.getElementById("video-options");
      let htmlOptions = videoOptions.map((option) => {
        if (selectedVideoInput === option.deviceId) {
          emoji = "✓";
        } else {
          emoji = "–";
        }
        console.log(selectedVideoInput);
        return `<p class="option" id='${option.deviceId}'>${emoji} ${option.label}</p>`;
      });
      optionList.innerHTML = htmlOptions.join("");
    })
    .catch(function (err) {
      console.log(err.name + ": " + err.message);
    });
}

async function setVideo(deviceId) {
  console.log("set video");
  const video = document.getElementById("video");
  await startVideo(deviceId);
  video.oncanplay = async (e) => {
    video.play();
  };
}

window.addEventListener("DOMContentLoaded", () => {
  getVideoOptions();
});

window.addEventListener("click", (e) => {
  // Execute dropdown select functionality
  if (e.target.className === "option" && e.target.id !== selectedVideoInput) {
    console.log("click");
    setVideo(e.target.id);
    selectedVideoInput = `${e.target.id}`;
    document.getElementById("video-options").classList.toggle("show");
    getVideoOptions();
  }
  // Log state to the console
  // console.log(state)
});

// map values to a given range
Number.prototype.mapRange = function (in_min, in_max, out_min, out_max) {
  return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
