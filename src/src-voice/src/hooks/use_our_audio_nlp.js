import useSpeechRecognition from './use_speech_recognition';
import config from '../config';
import natural from 'natural';
import nlp from 'compromise';

export default function useOurAudioNlp() {
  return useSpeechRecognition({
    onInit: () => {
      console.log('init');
      var locationClassifier = new natural.BayesClassifier();
      locationClassifier.addDocument('default', 'default');
      for (let location of config.locations) {
        let name = location.name || location;
        locationClassifier.addDocument(name, name);
      }
      locationClassifier.train();

      // Setup item clasifier
      var itemClassifier = new natural.BayesClassifier();
      itemClassifier.addDocument('default', 'default');
      for (let location of config.locations) {
        for (let item of location.items || []) {
          itemClassifier.addDocument(item, item);
        }
      }
      itemClassifier.train();

      return { locationClassifier, itemClassifier };
    },
    onResult: (e, initResult, setState) => {
      let last = e.results.length - 1;
      let text = e.results[last][0].transcript;
      console.log('Confidence: ' + e.results[0][0].confidence);
      console.log('Text detected: ' + text);
      console.log('TTT', initResult);

      let doc = nlp(text);
      // If any phrase is found from itemConditions
      if (
        config.findConditions
          .map((phrase) => {
            return doc.has(phrase);
          }) // Make each a boolean value
          .reduce((acc, cur) => {
            return acc || cur;
          }, false) // If any is true then return true
      ) {
        let item = initResult.itemClassifier.classify(text);
        let location = initResult.locationClassifier.classify(text);
        let directions = [];
        if (item !== 'default') {
          let locationObj = config.locations.find((s) =>
            s.items?.includes(item)
          );
          directions = directions.concat(locationObj?.directions);
          setState((s) => ({
            ...s,
            location: locationObj.name || locationObj,
            directions,
            item: item,
          }));
        }
        if (location !== 'default') {
          let locationObj = config.locations.find((s) => s.name === location);
          directions = directions.concat(locationObj?.directions);
          setState((s) => ({
            ...s,
            location,
            directions: locationObj?.directions,
          }));
        }
      }
    },
  });
}
