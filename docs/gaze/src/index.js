/**
 * Adapted from Tensorflow.js' facemesh demo (Apache 2.0 licensed) at
 * https://github.com/tensorflow/tfjs-models/tree/master/facemesh/demo
 */

import * as facemesh from '@tensorflow-models/facemesh';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';

import * as tfjsWasm from '@tensorflow/tfjs-backend-wasm';

tfjsWasm.setWasmPath(
  `https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@${tfjsWasm.version_wasm}/dist/tfjs-backend-wasm.wasm`);

function isMobile() {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  return isAndroid || isiOS;
}

function drawPath(ctx, points, closePath) {
  const region = new Path2D();
  region.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point[0], point[1]);
  }

  if (closePath) {
    region.closePath();
  }
  ctx.stroke(region);
}

let model, ctx, videoWidth, videoHeight, video, canvas;
let predix = {};

const VIDEO_SIZE = 240;
const mobile = isMobile();
// Don't render the point cloud on mobile in order to maximize performance and
// to avoid crowding limited screen space.
const renderPointcloud = mobile === false;
const state = {
  backend: 'wasm', // or 'webgl' or 'cpu', set with `await tf.setBackend(backend)`
  maxFaces: 1, // up to 20, set with `await facemesh.load({maxFaces: val})`
  triangulateMesh: false
};
const outputDiv = document.querySelector('#console');
const hud = document.querySelector('#hud');
const hudCursor = document.querySelector('#cursor');

if (renderPointcloud) {
  state.renderPointcloud = true;
}

async function setupCamera() {
  video = document.getElementById('video');

  const stream = await navigator.mediaDevices.getUserMedia({
    'audio': false,
    'video': {
      facingMode: 'user',
      // Only setting the video to a specified size in order to accommodate a
      // point cloud, so on mobile devices accept the default size.
      width: mobile ? undefined : VIDEO_SIZE,
      height: mobile ? undefined : VIDEO_SIZE
    },
  });
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

function crossProduct(a,b) {
  return [
    a[1]*b[2] - a[2]*b[1],
    a[2]*b[0] - a[0]*b[2],
    a[0]*b[1] - a[1]*b[0]
  ]
}

const MAX_H = 25;
const MIN_H = -25;
const MAX_V = 15;
const MIN_V = -15;

function moveCursorVector(M,L,R) {
  outputDiv.innerHTML = '';
  // M, L, R are all 3D points
  const ML = [L[0]-M[0], L[1]-M[1], L[2]-M[2]];
  const MR = [R[0]-M[0], R[1]-M[1], R[2]-M[2]];
  // Get the cross product of MR x ML.
  const dir = crossProduct(MR,ML);
  const len = Math.sqrt(dir[0]*dir[0] + dir[1]*dir[1] + dir[2]*dir[2]);
  const dirUnit = [dir[0]/len, dir[1]/len, dir[2]/len];
  // Allow correction of the unit vector since plane may 
  // not be perfectly aligned with camera when normalized.
  const unit = [dirUnit[0]+0, dirUnit[1]+0, dirUnit[2]+0];
  const horizAngle = Math.atan2(unit[0],-1*unit[2]) * 180/Math.PI;
  const vertAngle  = Math.atan2(unit[1],-1*unit[2]) * 180/Math.PI;
  // Show the output of the angles (for debugging).
  outputDiv.innerHTML += 'horiz: '+horizAngle+'\n';
  outputDiv.innerHTML += 'vert: '+vertAngle+'\n';
  // Move the cursor!
  const totalWidth = hud.clientWidth;
  const totalHeight = hud.clientHeight;
  let cursorX = horizAngle + MAX_H;
  if (cursorX < 0) cursorX = 0;
  if (cursorX > MAX_H*2) cursorX = MAX_H*2;
  cursorX = cursorX / (MAX_H - MIN_H);
  let cursorY = vertAngle + MAX_V;
  if (cursorY < 0) cursorY = 0;
  if (cursorY > MAX_V*2) cursorY = MAX_V*2;
  cursorY = cursorY / (MAX_V - MIN_V);
  
  hudCursor.style.right = `calc( ${cursorX*100}% - 10px)`;
  hudCursor.style.top = `${cursorY*hud.clientHeight}px`;
}

async function renderPrediction() {
  const predictions = await model.estimateFaces(video);
  ctx.drawImage(
      video, 0, 0, videoWidth, videoHeight, 0, 0, canvas.width, canvas.height);

  if (predictions.length > 0) {
    predictions.forEach(prediction => {
      const keypoints = prediction.scaledMesh;
      // *** for logging and debugging only:
      predix = prediction;
      // ***

      if (state.triangulateMesh) {
        for (let i = 0; i < TRIANGULATION.length / 3; i++) {
          const points = [
            TRIANGULATION[i * 3], TRIANGULATION[i * 3 + 1],
            TRIANGULATION[i * 3 + 2]
          ].map(index => keypoints[index]);

          drawPath(ctx, points, true);
        }
      } else {
        for (let i = 0; i < keypoints.length; i++) {
          const x = keypoints[i][0];
          const y = keypoints[i][1];

          ctx.beginPath();
          ctx.arc(x, y, 1 /* radius */, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      // Pass three points to figure out which way the face is pointing.
      moveCursorVector(
        prediction.annotations.midwayBetweenEyes[0],
        prediction.annotations.noseLeftCorner[0],
        prediction.annotations.noseRightCorner[0]
      );

    });
  }
  requestAnimationFrame(renderPrediction);
};

// DEBUG MODE: log out the prediction to the console on click
document.addEventListener('click', (e) => {
  // console.log(JSON.stringify(predix,null,2));
  console.log(predix.scaledMesh);
  console.log(predix.annotations);
  const numbers = {};
  for (let group in predix.annotations) {
    numbers[group] = [];
    for (let i = 0; i < predix.annotations[group].length; i++) {
      const point = predix.annotations[group][i];
      numbers[group].push(predix.scaledMesh.findIndex(item => JSON.stringify(item) === JSON.stringify(point)));
      console.log(`${group}[${i}] is ${point} which is equal to ${numbers[group][i]}: ${predix.scaledMesh[numbers[group][i]]}`)
    }
  }
  console.log(numbers);
  console.log(JSON.stringify(numbers));
});

async function main() {
  await tf.setBackend(state.backend);

  const backendSelect = document.querySelector('select#backend');
  backendSelect.addEventListener('change', async (event) => {
    const newSelection = backendSelect.selectedOptions[0].value;
    console.log(`changing backend to ${newSelection}`);
    await tf.setBackend(newSelection)
    state.backend = newSelection;
  });

  await setupCamera();
  video.play();
  videoWidth = video.videoWidth;
  videoHeight = video.videoHeight;
  video.width = videoWidth;
  video.height = videoHeight;

  canvas = document.getElementById('output');
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  const canvasContainer = document.querySelector('.canvas-wrapper');
  canvasContainer.style = `width: ${videoWidth}px; height: ${videoHeight}px`;

  ctx = canvas.getContext('2d');
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.fillStyle = '#32EEDB';
  ctx.strokeStyle = '#32EEDB';
  ctx.lineWidth = 0.5;

  model = await facemesh.load({maxFaces: state.maxFaces});
  renderPrediction();
};

main();