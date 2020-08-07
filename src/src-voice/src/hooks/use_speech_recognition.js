import React, { useEffect, useState } from 'react';
const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

export default function useSpeechRecognition({ onInit, onResult }) {
  let [state, setState] = useState({ audio: null, status: 'init' });
  // Get microphone
  let getMicrophone = async () => {
    setState((s) => ({ ...s, status: 'starting' }));
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    setState((s) => ({ ...s, audio, status: 'started' }));
  };
  // Stop Microphone
  useEffect(() => {
    document.title = 'Map Directions';

    if (isChrome) {
      getMicrophone();
      let init;
      if (onInit) {
        init = onInit();
      }

      var SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      var recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.lang = 'en-US';
      recognition.start();
      recognition.onend = () => recognition.start(); //force restart recognition when it times out

      //Listen for detection events
      recognition.addEventListener('result', (e) => {
        console.log('recognition.result');
        let result;
        if (onResult) {
          result = onResult(e, init, setState);
        }

        setState((s) => ({ ...s, rawResult: e.res, result }));
      });
    }
  }, [setState]);
  return [state, setState];
}
