import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    let intervalHandle = setInterval(() => {
      setState((s) => ({
        ...s,
        phrase: phraseGenerator(),
        zoomResetCount: (s.zoomResetCount || 0) - 1,
        zoom: s.zoomResetCount === 0 ? 1.2 : s.zoom,
        zoomOrigin: s.zoomResetCount == 0 ? 'center' : s.zoomOrigin,
      }));
    }, 1000);
    setState((s) => ({
      ...s,
      zoom: 1.2,
      zoomOrigin: 'center',
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
        transform: `scale(${state.zoom})`,
        transformOrigin: state.zoomOrigin,
      }}
    >
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Map
          directions={state.directions}
          onPathBBoxChange={(bbox) => {
            console.log(bbox);

            console.log(bbox, {
              zoomResetCount: 5,
              zoom: Math.min(1099 / bbox.width, 618 / bbox.height, 3),
              zoomOrigin: `${Math.floor(
                bbox.x + bbox.width / 2
              )}px ${Math.floor(bbox.y + bbox.width / 2)}px`,
            });
            setState((s) => ({
              ...s,
              zoomResetCount: 5,
              zoom: Math.min(899 / bbox.width, 418 / bbox.height, 2),
              zoomOrigin: `${Math.floor(
                ((bbox.x + bbox.width / 2) / 1080) * 100
              )}% ${Math.floor(((bbox.y + bbox.width / 2) / 618) * 100)}%`,
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
