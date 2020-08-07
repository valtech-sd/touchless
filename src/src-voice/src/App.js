import styles from './App.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import MapLayout from './components/MapLayout';
import useOurAudioNlp from './hooks/use_our_audio_nlp';
import AudioAnalyser from './components/AudioAnalyser';

//images
import valtech_logo from './images/valtech.svg';

const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

export default function App() {
  let [state, setState] = useOurAudioNlp();

  return (
    <div>
      {/*<EmployeeCard />*/}
      <div className="tablet">
        <div className="content">
          {isChrome ? (
            <Container style={{ margin: 0, padding: 0, border: 0 }}>
              <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="stretch"
                style={{ margin: 0, padding: 0, border: 0 }}
              >
                <Grid
                  item
                  xs={12}
                  style={{
                    backgroundColor: '#dfdfdf',
                    zIndex: 1000,
                    marginTop: 0,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    alignItems="center"
                    style={{}}
                  >
                    <Grid item xs={3} direction="column">
                      <Grid
                        container
                        alignItems="center"
                        style={{
                          marginLeft: 20,
                        }}
                      >
                        <Grid item>
                          <img
                            style={{
                              marginTop: 0,
                              marginLeft: 0,
                              height: 70,
                              width: 200,
                            }}
                            src={valtech_logo}
                            alt="avatar"
                          />
                          <Typography
                            variant="h5"
                            component="h2"
                            style={{
                              color: '#8f8f8f',
                              fontFamily: 'Verdana',
                              fontWeight: 'bold',
                              fontSize: 14,
                              marginLeft: 0,
                              marginTop: -20,
                            }}
                          >
                            Airport Voice Assistant
                          </Typography>
                        </Grid>
                        <Grid item></Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h5"
                        component="h2"
                        style={{
                          color: '#8f8f8f',
                          fontFamily: 'Verdana',
                          fontWeight: 'bold',
                          fontSize: 14,
                          marginLeft: 0,
                          marginTop: 42,
                        }}
                      >
                        Try Saying "{state.phrase}"
                      </Typography>
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
                <Grid
                  style={{
                    marginTop: 100,
                    //overflow: 'hidden',
                    height: '100%',
                    width: '100%',
                  }}
                  item
                >
                  <MapLayout state={state} setState={setState} />
                </Grid>
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
