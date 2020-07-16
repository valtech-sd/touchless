
const { styler, spring, listen, multitouch, value } = window.popmotion;

const queryUIDString = window.location.search.substr(1);
console.log(queryUIDString);
let colorCount = 0;
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
  firebase.database().ref('rotation/x/').set(touches[0].x);

});