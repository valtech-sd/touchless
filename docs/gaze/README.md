# Gaze detection demo

This is a prototype that uses the direction of your face to control a cursor on a screen. It builds on Google's Apache 2.0 licensed Facemesh demo found [here](https://github.com/tensorflow/tfjs-models/tree/master/facemesh/demo).

To run it locally, we have to use a bundler that takes the node packages and compiles them into a static .js file. We're following Google's example here and using [Parcel](https://parceljs.org) because they've already configured it for us. 

## Installation

1. Run `npm i` from within this directory to install the node modules.
2. Run `npm run dev` to build everything into the `./dev` folder and run a local server at `localhost:1234`.
3. Run `npm run build` to build it into the `./` (root) folder for production. This is so that you'll see it when you go to `touchless.valtech.engineering/gaze`.

> **Note:** The build process creates hashed-suffix copies of the production files when they change, to get around caching. You'll need to delete the old files after each `npm run build` before you commit their new counterparts. 👍

## How it works

[Facemesh](https://github.com/tensorflow/tfjs-models/tree/master/facemesh) is a machine learning model that can look at an image or video and make a 3D mesh of a face (with 486 reference points). It runs entirely locally on the browser, using a TensorFlow model that has been created and optimized for TensorFlow.js by Google's team. 

The facemesh model, along with handpose, is also a part of [Mediapipe](https://google.github.io/mediapipe/), an initiative from the TensorFlow team to allow easier combinations of different ML models for use on devices, desktops, and the web.

## What it returns

Each camera frame that is processed returns an array of `prediction` objects (one `prediction` for each estimated face the model thinks it sees in the image). A `prediction` object has the following properties:

- **`faceInViewConfidence`** - (`0` to `1`) how confident the model is that this is a face, with a default threshold of 75%.
- **`boundingBox`** - the 2D coordinates in the video image for `topLeft` and `bottomRight` of the bounding box. The tfjs facemesh model currently does not support rotation of the face or its bounding box, like the mediapipe gifs suggest.
- **`mesh`** - the mesh of 3D points (array of `[x,y,z]`)
- **`scaledMesh`** - the mesh of 3D points, normalized to the center of the bounds _(of all predicted faces?)_
- **`annotations`** - arrays of 3D points in `scaledMesh` that might be useful to you!  
Listed below as _`annotationName` (number of points)_
     - `silhouette` (36)
     - `lipsUpperOuter` (11)
     - `lipsLowerOuter` (10)
     - `lipsUpperInner` (11)
     - `lipsLowerInner` (11)
     - `rightEyeUpper0` (7)
     - `rightEyeLower0` (9)
     - `rightEyeUpper1` (7)
     - `rightEyeLower1` (9)
     - `rightEyeUpper2` (7)
     - `rightEyeLower2` (9)
     - `rightEyeLower3` (9)
     - `rightEyebrowUpper` (8)
     - `rightEyebrowLower` (6)
     - `leftEyeUpper0` (7)
     - `leftEyeLower0` (9)
     - `leftEyeUpper1` (7)
     - `leftEyeLower1` (9)
     - `leftEyeUpper2` (7)
     - `leftEyeLower2` (9)
     - `leftEyeLower3` (9)
     - `leftEyebrowUpper` (8)
     - `leftEyebrowLower` (6)
     - `midwayBetweenEyes` (1)
     - `noseTip` (1)
     - `noseBottom` (1)
     - `noseRightCorner` (1)
     - `noseLeftCorner` (1)
     - `rightCheek` (1)
     - `leftCheek` (1)

## Implementation approaches

### Key mesh points to use
![Map of the 486 mesh points](mesh_map.jpg)
- **Left eye edges:** 362 (inner), 263 (outer) / 386 (top), 374 (bottom)
- **Right eye edges:** 133 (inner), 33 (outer) / 159 (top), 145 (bottom)
- **Nose:** 1 (tip), 358 (left), 129 (right)

Full list correlating these point indices and the coordinates for each feature in `annotations` is in [`annotations.json`](./annotations.json). (The `silhouette` will obviously change each frame, but the other numbered points should match.)

### First approach

Get point `1` of `scaledMesh` in `prediction`, which is roughly the tip of the nose. `x` is `180` when pointing straight ahead (on Firefox), so moving back and forth moves left and right. Process the `y` in a similar fashion to get the up and down.

> **Result:** 
> - It's calibrated on Firefox, where the coordinate system is different from Chrome and Safari because the _video is sized differently_. 
> - The only thing that matters is the position of the tip of your nose, so moving your head position cheats it.
> - If a second face prediction is added (tracking two faces), the scaled mesh appears to be on a coordinate system for the bounding box of both faces.

### Second approach

- Add an overlay to coach the user where to put their head, in the center of the camera view.

- Calculate angles of the direction the face is pointing. _Yikes, it's linear algebra, all over again._

    - Get the following points from `annotations`: 

        - **M**: `midwayBetweenEyes` (point 168), 
        - **R**: `noseRightCorner` (point 98),
        - **L**: `noseLeftCorner` (point 327)

    - Make a plane to find an orthogonal unit vector. 

        1. make vector MR [Rx-Mx,Ry-My,Rz-Mz] and vector ML (L-M, same way)
        2. use right-hand rule: cross product MR x ML = vector pointing (hopefully) straight out from the face 

                  cross(A,B) = [ (Ay*Bz - Az*By), (Az*Bx - Ax*Bz), (Ax*By - Ay*Bx)]

        3. reduce this to a unit vector by 

    - Calculate the angles _alpha_ (around the x axis, causing y up and down movement) and _beta_ (around the y axis, causing left and right movement) 

### Future approaches
- get position of face in camera frame, direction of face relative to the camera, direction of iris relative to face, and make a vector to figure out where the person is looking.

## Why not use Tracking.js / face-api.js / WebGazer.js?

Initially, we were looking at [WebGazer.js](https://github.com/brownhci/WebGazer), a JavaScript library from researchers at Brown University designed to (for example) help create eyetracking heatmaps. 

WebGazer actually uses Facemesh under the hood, but combines it with their own iris tracking model, and heavily biases it toward where the mouse cursor position is. In our experiments, it required a lot of calibration (for our intended purposes), and was not as reliable when a mouse was not being used.

We also looked into [Tracking.js](https://trackingjs.com/), but it not been updated by its maintainer in two years. [face-api.js](https://github.com/justadudewhohacks/face-api.js/blob/master/README.md) was another viable option, but the performance was slightly slower than Facemesh.

Furthermore, Google recently announced an [iris tracking model](https://google.github.io/mediapipe/solutions/iris) for Mediapipe that looks quite accurate. The tfjs team is still working to [make this easily available in the  JavaScript library](https://github.com/tensorflow/tfjs-models/pull/508).