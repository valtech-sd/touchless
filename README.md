# Touchless

Valtech is exploring various options for low-touch and touchless physical experiences. This repo holds some of these experiments.

## Background

In response to the global health crisis, Touchless presents a series of Proof-of-concept web experiences that aims to rethink the way we interact in public and retail spaces.

## Libraries

#### Swipe

- [Handtrack.js](https://github.com/victordibia/handtrack.js)
- [Swipe-Listener](https://github.com/umanghome/swipe-listener)
- [Popmotion](https://github.com/popmotion/popmotion)
- [Fullpage.js](https://github.com/alvarotrigo/fullpage.js)

#### Gestures

- [Tensorflow.js](https://github.com/tensorflow/tfjs)
- [Fingerpose](https://github.com/andypotato/fingerpose)
- [Handtrack.js](https://github.com/victordibia/handtrack.js)
- [Reveal.js](https://github.com/hakimel/reveal.js)

#### Remote Manipulation

- [Popmotion](https://github.com/popmotion/popmotion)
- [Firebase](https://firebase.google.com/)

#### Voice

- [Web Speech API](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API)
- [Natural](https://github.com/NaturalNode/natural)
- [Compromise](https://github.com/spencermountain/compromise)

#### Gaze Tracking

- [TensorFlow.js](https://github.com/tensorflow/tfjs)
- [MediaPipe Facemesh](https://github.com/tensorflow/tfjs-models/tree/master/facemesh)

#### Voice Assistant

- [React](https://reactjs.org/)

  

#### Voice Fashion

- [React](https://reactjs.org/)

  

## Setup

To run locally, navigate to the `src` directory and enter into a POC directory. If required, install dependencies by running `npm install` in command line  and `npm run build` to build the project. Note that some projects do not require to be built and all src files can be found in `docs` directory.

## Adding new POC

When adding a new POC project to the repo,  the folder containing the built app should be placed inside `docs` directory. If the app needs to be built from source code, all source code should be located in `src` directory. If the app does not need to be built, add a placeholder folder with a PLACEHOLDER markdown file as seen [here](https://github.com/valtech-sd/touchless/tree/master/src/src-hand). 

## Live Site and Deployment

### Building the latest for the site

### Contributing

This project is hosted on Github Pages and is using Jekyll to build  the site. It is recommended that you use rbenv for your Ruby and GEM  environment. Here is a decent [guide](https://jekyllrb.com/docs/installation/) if you need help setting up Ruby.

Install the bundler by running:

```
$ gem install bundler:2.1.4
```

To set up your development environment first run the following from the `docs` directory:

```
$ bundle install
```

To build the site and make it available on a local server:

```
$ bundle exec jekyll serve
```