/**
 * Adapted from Tensorflow.js' facemesh demo (Apache 2.0 licensed) at
 * https://github.com/tensorflow/tfjs-models/tree/master/facemesh/demo
 */

import MovingCursor from './MovingCursor.js';
import hitAreas from './hit-areas';
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

let model, ctx, videoWidth, videoHeight, video, canvas, selectedVideoInput;
let videoOptions = [];
let emoji = '–';

const VIDEO_SIZE = 240;
const mobile = isMobile();
// Don't render the point cloud on mobile in order to maximize performance and
// to avoid crowding limited screen space.
const renderPointcloud = mobile === false;
const state = {
  backend: 'wasm', // or 'webgl' or 'cpu', set with `await tf.setBackend(backend)`
  maxFaces: 1, // up to 20, set with `await facemesh.load({maxFaces: val})`
  triangulateMesh: false,
  isOnboarding: true,
  cursorX: 0,
  cursorY: 0,
  globalCursorX: 0,
  globalCursorY: 0,
  hoveredElement: 0,
  selectedElement: 0,
  hoverCounts: [0,0,0,0,0,0,0,0,0,0,0],
  hasNewHover: false,
  hasNewSelection: false,
};
const canvasWrapper = document.querySelector('.canvas-wrapper');
const onboarding = document.querySelector('#onboarding');
const startButton = document.querySelector('#start_button');
const stage = document.querySelector('svg#storefront');
let stageCoords = {};
function setStageCoords() {
  const rect = stage.getBoundingClientRect();
  stageCoords.top = rect.top,
  stageCoords.left = 0;
  stageCoords.right = rect.right;
  stageCoords.height = rect.height;
  stageCoords.bottom = rect.bottom;
};
setStageCoords();
window.addEventListener('resize', setStageCoords);
const hoverDuration = 20;
const hudCursor = new MovingCursor('#cursor', 0, 0, 20, 20);
const stableCursor = new MovingCursor('#follower', 0, 0, 20, 20);
// cache references to all the products
const allHovers = [
  null,
  document.querySelector('#A'),
  document.querySelector('#B'),
  document.querySelector('#C'),
  document.querySelector('#D'),
  document.querySelector('#E'),
  document.querySelector('#F'),
  document.querySelector('#G'),
  document.querySelector('#H'),
  document.querySelector('#nav-left'),
  document.querySelector('#nav-right'),
];
const callouts = [
  null,
  document.querySelector('#callouts1'),
  document.querySelector('#callouts2'),
  document.querySelector('#callouts3'),
  document.querySelector('#callouts4'),
  document.querySelector('#callouts5'),
  document.querySelector('#callouts6'),
  document.querySelector('#callouts7'),
  document.querySelector('#callouts8'),
];
const cartButton = document.querySelector('#nav_right_bg');
const exitButton = document.querySelector('#nav_left_bg');

if (renderPointcloud) {
  state.renderPointcloud = true;
}

async function setupCamera(cameraId) {
  video = document.getElementById('video');

  const stream = await navigator.mediaDevices.getUserMedia({
    'audio': false,
    'video': {
      facingMode: 'user',
      // Only setting the video to a specified size in order to accommodate a
      // point cloud, so on mobile devices accept the default size.
      width: mobile ? (VIDEO_SIZE/2) : VIDEO_SIZE,
      height: mobile ? (VIDEO_SIZE/2) : VIDEO_SIZE,
      deviceId: cameraId
    },
  });
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      canvasWrapper.classList.add('visible');
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

let count = 0;

async function moveCursorVector(M,L,R) {
   // outputDiv.innerHTML = '';
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
   // outputDiv.innerHTML += 'horiz: '+horizAngle+'\n';
   // outputDiv.innerHTML += 'vert: '+vertAngle+'\n';
  // Move the cursor!
  const totalWidth = stage.clientWidth;
  const totalHeight = stage.clientHeight;
  let cursorX = horizAngle + MAX_H;
  if (cursorX < 0) cursorX = 0;
  if (cursorX > MAX_H*2) cursorX = MAX_H*2;
  cursorX = cursorX / (MAX_H - MIN_H);
  let cursorY = vertAngle + MAX_V;
  if (cursorY < 0) cursorY = 0;
  if (cursorY > MAX_V*2) cursorY = MAX_V*2;
  cursorY = cursorY / (MAX_V - MIN_V);
  
  hudCursor.setLocation(1920-cursorX*1920, cursorY*1080);


  stableCursor.follow(hudCursor.location);
  state.cursorX = stableCursor.x;
  state.cursorY = stableCursor.y;
  state.globalCursorX = (state.cursorX/1920)*stageCoords.right;
  state.globalCursorY = (state.cursorY/1080)*stageCoords.height + stageCoords.top;
  stableCursor.move();

  // This section is ok for a demo but need to reimplement it...
  // (document.elementFromPoint() was not working at all.)
  let hoveredElement;
  if (state.isOnboarding) {
    // if isOnboarding, we don't hover anything except START button
    hoveredElement = ( state.cursorX >= 1316 && state.cursorX <= 1573 && state.cursorY >= 764 && state.cursorY <= 1003 ) 
      ? 1
      : 0;
    if (state.hoveredElement !== hoveredElement) {
      state.hoveredElement = hoveredElement;
      state.hasNewHover = true;
      if (hoveredElement) {
        state.hoverCounts[1] += 1;
      } else {
        state.hoverCounts[1] = 0;
      }
    }
    // have they selected the START button?
    if (!!hoveredElement) {
      state.hoverCounts[1] += 1;
      if (state.hoverCounts[1] > hoverDuration) {
        debugger;
        console.log('start selected')
        onboarding.addEventListener('transitionend', (e) => {
          console.log('removing onboarding element');
          state.hoverCounts[1] = 0;
          state.hoveredElement = 0;
          onboarding.remove();
          state.hasNewHover = false;
          state.isOnboarding = false;
        })
        onboarding.classList.add('dismiss');
      } 
    }

  } else {
    if (state.selectedElement === 0) {
      // nothing is selected
      hoveredElement = hitAreas[Math.floor(state.cursorY/30)][Math.floor(state.cursorX/30)];
      // console.log(hoveredElement);
      if (hoveredElement < 9) {
        // if it's over a new hovered element
        if (state.hoveredElement !== hoveredElement) {
          // toggle the highlights
          // console.log(hoveredElement);
          state.hoveredElement = hoveredElement;
          state.hasNewHover = true;
          // start the counter for selection
          state.hoverCounts[hoveredElement] += 1;
        } else {
          // if it's the same element and 0 make sure that it's not incrementing
          if (hoveredElement === 0 && state.hoverCounts[0] > 0) {
            // reset the hover count
            state.hoverCounts[0] = 0;
          } else if (state.hoverCounts[hoveredElement] > 0) {
            state.hoverCounts[hoveredElement] += 1;
            if (state.hoverCounts[hoveredElement] > hoverDuration) {
              // console.log('selected ' + hoveredElement);
              state.selectedElement = state.hoveredElement;
              state.hasNewSelection = true;
              state.hoveredElement = 0;
              state.hoverCounts = [0,0,0,0,0,0,0,0,0,0,0];
            }
          }
        }
      }
    } else {
      // something is selected, only 9 and 10 are valid
      hoveredElement = hitAreas[Math.floor(state.cursorY/30)][Math.floor(state.cursorX/30)];
      if (hoveredElement < 9) hoveredElement = 0;
      if (state.hoveredElement !== hoveredElement) {
        // console.log(hoveredElement);
        state.hoveredElement = hoveredElement;
        state.hasNewHover = true;
        state.hoverCounts[hoveredElement] += 1;
      } else {
        // count down until selection;
        if (hoveredElement === 0 && state.hoverCounts[0] > 0) {
          state.hoverCounts[0] = 0;
        } else if (state.hoverCounts[hoveredElement] > 0) {
          state.hoverCounts[hoveredElement] += 1;
          if (state.hoverCounts[hoveredElement] > hoverDuration) {
            // console.log('selected '+hoveredElement);
            state.selectedElement = state.hoveredElement;
            state.hasNewSelection = true;
            state.hoveredElement = 0;
            state.hoverCounts = [0,0,0,0,0,0,0,0,0,0,0];
          }
        }
      } 
    }
  }
}

function updateDom() {
  if (state.isOnboarding) {
    // if in onboarding, we won't update hovered elements
    if (state.hasNewHover) {
      if (!!state.hoveredElement) {
        startButton.classList.add('hovered');
        state.hasNewHover = 0;
      } else {
        startButton.classList.remove('hovered');
        state.hasNewHover = 0;
      }
    }

  } else {
    // if there's a change in hover
    if (state.hasNewHover) {
      // if there's nothing selected
      if (state.selectedElement === 0) {
        for (let i = 1; i < 9; i++) {
          if (i !== state.hoveredElement) {
            allHovers[i].classList.remove('hovered');
          } else {
            allHovers[i].classList.add('hovered');
            state.hasNewHover = false;
          }
          // state.hoverCounts[i] = 0;
        }
      } else {
        for (let i = 9; i < allHovers.length; i++) {
          if (i !== state.hoveredElement) {
            allHovers[i].classList.remove('hovered');
          } else {
            allHovers[i].classList.add('hovered');
            state.hasNewHover = false;
          }
        }
      }
    }
    // if there's a change in selection
    if (state.hasNewSelection) {
      console.log('new selection! '+ state.selectedElement);
      if (state.selectedElement == 0) {
        for (let i = 1; i < allHovers.length; i++) {
          allHovers[i].classList.remove('selected');
          if (i > 0 && i < 9) {
            callouts[i].classList.remove('selected');
          }
        }
        allHovers[9].classList.remove('visible');
        allHovers[10].classList.remove('visible');
        state.hasNewSelection = false;
      } else if (state.selectedElement > 0 && state.selectedElement < 9) {
        // in hover mode and switching to selected mode
        for (let i = 1; i < allHovers.length; i++) {
          if (i !== state.selectedElement) {
            allHovers[i].classList.remove('selected');
            if (i > 0 && i < 9) {
              callouts[i].classList.remove('selected');
            }
          } else {
            allHovers[i].classList.remove('hovered');
            allHovers[i].classList.add('selected');
            if (i > 0 && i < 9) {
              callouts[i].classList.add('selected');
              allHovers[9].classList.add('visible');
              allHovers[10].classList.add('visible');
            }
            state.hasNewSelection = false;
          }
        }
      } else {
        // in selected mode 
        if (state.selectedElement === 9) {
          // selected EXIT
          exitButton.addEventListener('animationend', (e) => {
            state.selectedElement = 0;
            state.hasNewSelection = true; // go back to main
            exitButton.classList.remove('selected');
          });
          
          allHovers[9].classList.add('selected');
          exitButton.classList.add('selected');
          state.hasNewSelection = false;
          // go back to main
        } 
        if (state.selectedElement === 10) {
          // selected ADD TO CART
          cartButton.addEventListener('animationend', (e) => {
            state.selectedElement = 0;
            state.hasNewSelection = true; // go back to main
            cartButton.classList.remove('selected');
          });
          
          allHovers[10].classList.add('selected');
          cartButton.classList.add('selected');
          state.hasNewSelection = false;
          // go back to main
        }
        // then remove all selections
        for (let i = 1; i < allHovers.length; i++) {
          allHovers[i].classList.remove('selected');
          if (i > 0 && i < 9) {
            callouts[i].classList.remove('selected');
          }
        }
        // state.hasNewSelection = false;
      }
    }
  }
}

async function renderPrediction() {
  const predictions = await model.estimateFaces(video);
  ctx.drawImage(
      video, 0, 0, videoWidth, videoHeight, 0, 0, canvas.width, canvas.height);

  if (predictions.length > 0) {
    predictions.forEach(prediction => {
      const keypoints = prediction.scaledMesh;

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
  if (state.hasNewHover || state.hasNewSelection) {
    updateDom();
  }
  requestAnimationFrame(renderPrediction);
};

export async function main() {
  await tf.setBackend(state.backend);

  const backendSelect = document.querySelector('select#backend');
  backendSelect.addEventListener('change', async (event) => {
    const newSelection = backendSelect.selectedOptions[0].value;
    console.log(`changing backend to ${newSelection}`);
    await tf.setBackend(newSelection)
    state.backend = newSelection;
  });
  setVideo();
};

async function getVideoOptions(){
  navigator.mediaDevices.enumerateDevices()
  .then(function(devices) {
    let videoDevices = devices.filter(device => device.kind === "videoinput")
    videoDevices.forEach(function(device) {
      videoOptions.push(device);
    });
    let optionList = document.getElementById("video-options")
    let htmlOptions = videoOptions.map(option => {
      if( selectedVideoInput === option.deviceId){
        emoji = '✓'
      }
      return `<p class="option" id='${option.deviceId}'>${emoji} ${option.label}</p>`
    })
    optionList.innerHTML = htmlOptions.join("")
  })
  .catch(function(err) {
    console.log(err.name + ": " + err.message);
  });
}

function stopMediaTracks(stream) {
  stream.getTracks().forEach(track => {
    track.stop();
  });
}

async function setVideo(deviceId) {

  await setupCamera(deviceId);
  video.oncanplay = async (e) => {
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
    ctx.clearRect(0, 0,  canvas.width, canvas.height);
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.fillStyle = '#32EEDB';
    ctx.strokeStyle = '#32EEDB';
    ctx.lineWidth = 0.5;

    model = await facemesh.load({maxFaces: state.maxFaces});
    renderPrediction();
    updateDom();
  }
}


window.addEventListener('click', (e) => {
  // Execute dropdown select functionality
  if(e.target.className === 'option'){
    setVideo(e.target.id);
    selectedVideoInput = `${e.target.id}`
    document.getElementById('video-options').classList.toggle('show');
  }
  // Log state to the console
  console.log(state)
});

main();
// Get a list of video sources at first pageload
getVideoOptions();