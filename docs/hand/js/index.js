// import Reveal from '../node_modules/reveal.js';
// import Markdown from '../node_modules/reveal.js/plugin/markdown/markdown.esm.js';
// const Reveal = require('../node_modules/reveal.js');
// const Markdown = require('../node_modules/reveal.js/plugin/markdown/markdown.esm.js');
// const {Reveal, Markdown}

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
const boundaries = document.querySelector(".carousel");
const box = document.querySelector(".item");
const boxes = document.querySelectorAll(".item");
const getBoundariesWidth = () =>
  boundaries.getBoundingClientRect().width - box.getBoundingClientRect().width;
const divStylers = [];
let detectable = true;
let swipeIndex = 3;
let middleIndex = swipeIndex;

// let deck = new Reveal({
//   plugins: [ Markdown ]
// })
// deck.initialize();

const config = {
  video: { width: 320, height: 240, fps: 30 },
};

const landmarkColors = {
  thumb: "red",
  indexFinger: "blue",
  middleFinger: "yellow",
  ringFinger: "green",
  pinky: "pink",
  palmBase: "white",
};

const gestureStrings = {
  thumbs_up: "👍",
  victory: "✌🏻",
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
    fp.Gestures.ThumbsUpGesture,
  ];
  const GE = new fp.GestureEstimator(knownGestures);

  // load handpose model
  const model = await handpose.load();
  console.log("Handpose model loaded");

  // main estimation loop
  const estimateHands = async () => {
    // clear canvas overlay
    ctx.clearRect(0, 0, config.video.width, config.video.height);
    resultLayer.innerText = "";

    // get hand landmarks from video
    // Note: Handpose currently only detects one hand at a time
    // Therefore the maximum number of predictions is 1
    const predictions = await model.estimateHands(video, true);

    for (let i = 0; i < predictions.length; i++) {
      // draw colored dots at each predicted joint position
      // for (let part in predictions[i].annotations) {
      //   for (let point of predictions[i].annotations[part]) {
      //     drawPoint(ctx, point[0], point[1], 3, landmarkColors[part]);
      //   }
      // }

      // now estimate gestures based on landmarks
      // using a minimum confidence of 7.5 (out of 10)
      const est = GE.estimate(predictions[i].landmarks, 7.5);
      let distance = 1000;

      if (est.gestures.length > 0) {
        // find gesture with highest confidence
        let result = est.gestures.reduce((p, c) => {
          return p.confidence > c.confidence ? p : c;
        });

        // resultLayer.innerText = gestureStrings[result.name];
        if (result.name == "thumbs_up" && detectable) {
          detectable = false;
          console.log("👍");
          swipeIndex++;
          Reveal.next();
          setTimeout(activateDetection, 500);
        } else if (result.name == "victory" && detectable) {
          detectable = false;
          console.log("✌🏻");
          Reveal.prev();
          setTimeout(activateDetection, 500);
          swipeIndex--;
        }
      }
    }

    // ...and so on
    setTimeout(() => {
      estimateHands();
    }, 1000 / config.video.fps);
  };

  estimateHands().then(hideLoadingOverlay());
  console.log("Starting predictions");
}

async function initCamera(width, height, fps) {
  const constraints = {
    audio: false,
    video: {
      facingMode: "user",
      width: width,
      height: height,
      frameRate: { max: fps },
    },
  };

  const video = document.querySelector("#pose-video");
  video.width = width;
  video.height = height;

  // get video stream
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
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
}

function hideLoadingOverlay() {
  console.log("hide loading page");
  document.querySelector("#loading").style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
  initCamera(config.video.width, config.video.height, config.video.fps).then(
    (video) => {
      video.play();
      video.addEventListener("loadeddata", (event) => {
        console.log("Camera is ready");
        main();
      });
    }
  );

  const canvas = document.querySelector("#pose-canvas");
  canvas.width = config.video.width;
  canvas.height = config.video.height;
  console.log("Canvas initialized");
});
