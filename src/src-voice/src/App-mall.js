import styles from './App.css';
import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import { Avatar, Divider } from '@material-ui/core';
import AudioAnalyser from './components/AudioAnalyser';
import useOurAudioNlp from './hooks/use_our_audio_nlp';

//images
//import valtech_logo from './images/group.svg';
import map_img from './images/map.png';
import high_five from './images/success.png';
//import customer_img from './images/customer-profile@3x.png'
//import waveform from './images/waveform.png'
//import preferences_icon from './images/image-2@3x.png'
//import lifestyle_icon from './images/image-3@3x.png'
//import hoodie_image from './images/item-3@3x.png'
//import coffee_image from './images/item@3x.png'
//import generic_image from './images/item-2@3x.png'
//import water_bottle from './images/water-bottle.jpg'
//import tshirt_white from './images/tshirt-white.jpg'
//import tshirt_black from './images/tshirt-black.jpg'
//import tshirt_red from './images/tshirt-red.jpg'

import config from './config';

const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

//const ColorButton = withStyles((theme) => ({
//  root: {
//    color: theme.palette.getContrastText('#651fff'),
//    backgroundColor: '#3700ff',
//    boxShadow: 24,
//    fontFamily: 'Poppins',
//    '&:hover': {
//      backgroundColor: '#651fff',
//    },
//  },
//}))(Button);

//function EmployeeCard() {
//  return (
//    <Card variant="outlined" flex-direction="row" style={{ borderRadius: 0 }}>
//      <CardContent>
//        <Grid container spacing={3} direction="row" alignItems="center">
//          <Grid item xs={6}>
//            <Grid item xs={12}>
//              <img
//                src={valtech_logo}
//                alt="logo"
//                style={{ height: 20, borderRadius: 0 }}
//              />
//            </Grid>
//            <Grid
//              item
//              xs={12}
//              style={{
//                fontFamily: 'Verdana',
//                fontWeight: 'bold',
//                color: '#8f8f8f',
//              }}
//            >
//              Mall of the future
//            </Grid>
//          </Grid>
//          <Grid item xs={6}>
//            <Grid
//              container
//              spacing={3}
//              direction="row-reverse"
//              alignItems="center"
//            >
//              <h1 style={{ marginLeft: 16, marginRight: 16, color: 'grey' }}>
//                Store Finder
//              </h1>
//              {/*<Avatar alt="Employee Name" src={employee_img} />*/}
//            </Grid>
//          </Grid>
//        </Grid>
//      </CardContent>
//    </Card>
//  );
//}

function Map({ directions, scale }) {
  let directionsArray = Array.isArray(directions) ? directions : [directions];
  return (
    <svg width="1080" height="564" viewBox="0 0 1080 564">
      <defs>
        <pattern
          id="image"
          x="0"
          y="0"
          patternUnits="userSpaceOnUse"
          height="100%"
          width="100%"
        >
          <image x="0" y="0" href={map_img}></image>
        </pattern>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
      <rect
        x="0"
        y="0"
        width="1080"
        height="100%"
        viewBox="0 0 100% 100%"
        fill="url(#image)"
      />
      {directions && directionsArray && directionsArray.length > 0
        ? directionsArray.map((d) => (
            <path
              key={d}
              className="path"
              d={d}
              strokeWidth="5"
              stroke="red"
              fill="transparent"
            />
          ))
        : ''}
      <svg x="280" y="240">
        <rect
          x="35"
          y="-0"
          width="10"
          height="10"
          fill="blue"
          transform="rotate(45)"
        ></rect>
        <rect x="0" y="0" width="50" height="32" fill="blue"></rect>
        <text
          x="0"
          y="10"
          fontFamily="Verdana"
          fontSize="11"
          fill="red"
          style={{ fontWeight: 'bold' }}
        >
          <tspan x="3" dy="0.2em">
            you are
          </tspan>
          <tspan x="12" dy="1.2em">
            here
          </tspan>
        </text>
      </svg>
    </svg>
  );
}

export default function App() {
  let [state, setState] = useOurAudioNlp();

  const phraseGenerator = () => {
    return config.trySaying[
      Math.floor((Date.now() / 5000) % config.trySaying.length)
    ];
  };

  useEffect(() => {
    let intervalHandle = setInterval(() => {
      setState((s) => ({ ...s, phrase: phraseGenerator() }));
    }, 5000);
    setState((s) => ({ ...s, zoom: 1.2 }));
    return () => {
      clearInterval(intervalHandle);
    };
  }, [setState]);
  //return (
  //  <div class="tablet">
  //    <div class="content"></div>
  //  </div>
  //);
  return (
    <div>
      {/*<EmployeeCard />*/}
      <div className="tablet">
        <div className="content">
          {isChrome ? (
            <Container>
              <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="stretch"
              >
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    alignItems="center"
                  >
                    <Grid item xs={6}>
                      <Grid container alignItems="center">
                        <Grid item>
                          <img
                            style={{
                              marginTop: 50,
                              marginLeft: 26,
                              height: 105,
                              width: 105,
                            }}
                            src={high_five}
                            alt="avatar"
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h5"
                            component="h2"
                            style={{
                              fontFamily: 'Verdana',
                              fontWeight: 'bold',
                              fontSize: 18,
                              marginLeft: 24,
                              color: 'black',
                            }}
                          >
                            Valtech Mall
                          </Typography>
                          <Typography
                            variant="h5"
                            component="h2"
                            style={{
                              color: '#8f8f8f',
                              fontFamily: 'Verdana',
                              fontWeight: 'bold',
                              fontSize: 14,
                              marginLeft: 24,
                            }}
                          >
                            Voice Assistant
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <div
                  className="zoom"
                  style={{ transform: `scale(${state.zoom})` }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: -100, textAlign: 'center' }}
                  >
                    <Map directions={state.directions}></Map>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      spacing={3}
                      direction="row"
                      alignItems="center"
                      style={{ marginTop: -190 }}
                    >
                      <Grid item xs={1}>
                        <Grid item xs={12}></Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid item xs={12}>
                          <Typography
                            variant="h5"
                            component="h2"
                            style={{
                              color: '#8f8f8f',
                              fontFamily: 'Verdana',
                              fontWeight: 'bold',
                              fontSize: 14,
                              marginLeft: 24,
                            }}
                          >
                            Try Saying "{state.phrase}"
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={2}>
                        <Grid item xs={12}></Grid>
                      </Grid>
                      <Grid item xs={5}>
                        <div style={{ marginTop: 50 }}>
                          {/*<button onClick={toggleMicrophone}>
                          {state.audio
                            ? 'Stop microphone'
                            : 'Get microphone input'}
                        </button>*/}
                          {state.audio ? (
                            <AudioAnalyser audio={state.audio} />
                          ) : (
                            ''
                          )}
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Container>
          ) : (
            <Container>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ minHeight: '100vh' }}
              >
                <Grid item>
                  <Card style={{ borderRadius: 25, padding: 14 }}>
                    <Typography>Please use Chrome instead 🤷‍♂️</Typography>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          )}
        </div>
      </div>
    </div>
  );
}
