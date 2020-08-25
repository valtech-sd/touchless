import React, { useEffect, useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Map from './Map';
import AudioAnalyser from './AudioAnalyser';
import config from '../config';

export default function MapLayout({ state, setState }) {
  const phraseGenerator = () => {
    return config.trySaying[
      Math.floor((Date.now() / 5000) % config.trySaying.length)
    ];
  };
  let zoomRef = useRef();

  useEffect(() => {
    let intervalHandle = setInterval(() => {
      setState((s) => ({
        ...s,
        phrase: phraseGenerator(),
        zoomResetCount: (s.zoomResetCount || 0) - 1,
        zoom: s.zoomResetCount === 0 ? 'scale(1.2)' : s.zoom,
        zoomOrigin: s.zoomResetCount == 0 ? 'center' : s.zoomOrigin,
      }));
    }, 1000);
    setState((s) => ({
      ...s,
      zoom: 'scale(1.2)',
      zoomOrigin: 'center center',
      counter: 0,
      phrase: phraseGenerator(),
    }));

    return () => {
      clearInterval(intervalHandle);
    };
  }, [setState]);
  return (
    <div
      className="zoom"
      style={{
        transform: state.zoom,
        //transformOrigin: state.zoomOrigin,
      }}
      ref={zoomRef}
    >
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Map
          directions={state.directions}
          onPathBBoxChange={({ pathBBox, imageBBox }) => {
            console.log(pathBBox, imageBBox);

            let zoom = {
              zoomResetCount: 5,
              zoom: `scale(${Math.min(
                1080 / pathBBox.width,
                564 / pathBBox.height,
                3
              )}) translate(${
                15 - Math.floor((pathBBox.x / (imageBBox.width * 2)) * 100)
              }%, ${
                10 - Math.floor((pathBBox.y / (imageBBox.height * 2)) * 100)
              }%)`,
              zoomOrigin: 'center center',
              //zoomOrigin: `${Math.floor(
              //  ((pathBBox.x + pathBBox.width / 2) / 1080) * 100
              //)}% ${Math.floor(((pathBBox.y + pathBBox.width / 2) / 618) * 100)}%`,
            };
            console.log(pathBBox, zoom);
            setState((s) => ({
              ...s,
              ...zoom,
            }));
          }}
        ></Map>
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
        </Grid>
      </Grid>
    </div>
  );
}
