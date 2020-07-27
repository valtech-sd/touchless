
const { styler, spring, listen, multitouch, value } = window.popmotion;

const queryUIDString = window.location.search.substr(1);
console.log(queryUIDString);
let colorCount = 0;
let buttonPress = 0;
let cooldown = false;
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDNzSRFhlT_Nch6TTB3UZTpFfvW0m8sa1Q",
  authDomain: "touchless-qr.firebaseapp.com",
  databaseURL: "https://touchless-qr.firebaseio.com",
  projectId: "touchless-qr",
  storageBucket: "touchless-qr.appspot.com",
  messagingSenderId: "1069402189378",
  appId: "1:1069402189378:web:6b5314c8e86a87016607db",
  measurementId: "G-8JB2KE736F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//add listeners for device motion and device orientation to change queued planet

if (typeof DeviceMotionEvent.requestPermission === 'function') {
  DeviceMotionEvent.requestPermission()
    .then(permissionState => {
      if (permissionState === 'granted') {
        window.addEventListener("devicemotion", handleMotionEvent, true);
      }
    })
    .catch(console.error);
} else {
  window.addEventListener("devicemotion", handleMotionEvent, true);
}

if (typeof DeviceOrientationEvent.requestPermission === 'function') {
  DeviceOrientationEvent.requestPermission()
    .then(permissionState => {
      if (permissionState === 'granted') {
        window.addEventListener("deviceorientation", handleOrientation, true);
      }
    })
    .catch(console.error);
} else {
  window.addEventListener("deviceorientation", handleOrientation, true);
}

let touchX = 0;
let touchY = 0;
// Get a key for a new Post.
function changeColor() {
  let newColor = randomColor();
  console.log(newColor)
  firebase.database().ref('color/').set(newColor);
}

// const modelViewer = document.querySelector('model-viewer');
// modelViewer.cameraOrbit = 'auto auto 10%;

multitouch().start(({ touches, scale, rotate }) => {
  firebase.database().ref(queryUIDString + '/rotation/x/').set(touches[0].x);
  firebase.database().ref(queryUIDString + '/rotation/y/').set(touches[0].y);
});

// const touchRotation = (initialRotate = 0) => multitouch({ rotate: initialRotate })
//   .pipe(({ rotate }) => rotate);

// touchRotation().start((rotate) =>   firebase.database().ref(queryUIDString + '/rotation/y/').set(touches[0].x));

function moveLeft() {
  if (!cooldown) {
    firebase.database().ref(queryUIDString + '/navigate/left').set(buttonPress);
    buttonPress++; // number value doesn't matter, just needs to be new value to trigger action
    setTimeout(activatePage, 1000);
    cooldown = true;
  }
}

function moveRight() {
  if (!cooldown) {
    firebase.database().ref(queryUIDString + '/navigate/right').set(buttonPress);
    buttonPress++; // number value doesn't matter, just needs to be new value to trigger action
    setTimeout(activatePage, 1000);
    cooldown = true;
  }
}
// queue planet when device tilts
function handleOrientation(event) {
  if (event.alpha < 150) {
    firebase.database().ref(queryUIDString + '/orient/').set(-1);
  } else if (event.alpha > 210) {
    firebase.database().ref(queryUIDString + '/orient/').set(1);
  }
}

// queue planet when device is shaken
function handleMotionEvent() {
  firebase.database().ref(queryUIDString + '/orient/').set(1);
}

function activatePage() {
  cooldown = false;
}