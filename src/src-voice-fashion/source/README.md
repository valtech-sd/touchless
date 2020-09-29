# Retail Voice Demo v2

This repository is a reimplementation of the original retail voice demo, but using the Web Speech API. 

Instead of using Dialogflow and a node listener, we do everything with Chrome's Web Speech API and regular expressions. 

## Installation

Open `index.html` in Chrome.  
(Ideally, host index.html and supporting files on an `https://` server, so that audio permissions only need to be asked for once, rather than every start/restart of the speech recognizer.)

Live demo is at <https://voice.valtech.engineering/>.

## Operation

- Press the spacebar or click the microphone icon to start listening. 
- Say measurements, e.g., `your waist is 33 and 3/8 inches` or `you have a 27 inch sleeve`, or even `neck 16`. It will default to inches. 
- If you say a measurement in centimeters, it will convert to inches. If you want to see metric, say `switch to metric`. Say `switch to inches` to return to English measurements.
- You can also issue commands like `stop listening` or `clear all measurements`.
- When all four measurements are complete, the CONTINUE button will become enabled. Click it to move to the recommendation screen, or say `continue`.
- On the recommendation screen, click START OVER to clear everything and begin again.

## Deploying

Currently, there is no continuous integration set up. You'll need to manually copy files to S3, make them public, and then test with some query parameters to see that things are all good.

1. Edit `index.html` to update _(increment by one)_ the `?v=X` query parameter used on the `<link href="main.css" ...>` and `<script src="web-speech.js"></script>`.
2. Log in to your AWS console. If you don't have access to the `mjdops` group in AWS, get someone in Engineering to add you to the IAM.
2. Upload the files (`index.html`,`main.css`,`web-speech.js`) to S3 to [the voice.valtech.engineering bucket](https://console.aws.amazon.com/s3/buckets/voice.valtech.engineering/).
3. Make sure that the files are made public. (Check the checkboxes next to them and then go to `Actions` > `Make Public`).
4. The Cloudfront CDN may (?) be caching your files from S3. Try loading <https://voice.valtech.engineering/?v=aaa>, where `aaa` is a new number matching the incremented query parameters in (1).

## How it works

### Web Speech API

The Web Speech API is an [open web standard](https://wicg.github.io/speech-api/) that is implemented in Chrome, and [under consideration in Firefox and Edge](https://caniuse.com/#feat=speech-recognition). This [tutorial](https://www.sitepoint.com/introducing-web-speech-api/) and [demo](http://aurelio.audero.it/demo/web-speech-api-demo.html) walk through the basics of it. 

Under the hood, Chrome is streaming your audio to its [Google Cloud Speech Recognition API](https://cloud.google.com/speech-to-text/) and returning the transcript.  

> Chrome supports the Web Speech API, a mechanism for converting speech to text on a web page. 
> It uses Google's servers to perform the conversion. Using the feature sends an audio recording 
> to Google (audio data is not sent directly to the page itself), along with the domain of the 
> website using the API, your default browser language and the language settings of the website. 
> Cookies are not sent along with these requests.

from <https://www.google.com/chrome/privacy/whitepaper.html#speech>  

Because it's being done by the browser itself and not the web page, we do not need to manage keys or session IDs, or pay for cloud server usage. (What does Google get out of it? Your speech audio is free training data for their recognition algorithms.)

To keep the recognition connection alive, we used [this simple reconnection technique written by Amanda Hussey](https://medium.com/@amanda.k.hussey/a-basic-tutorial-on-how-to-incorporate-speech-recognition-with-react-6dff9763cea5).

### Regular Expressions

When we get the transcript back from Google's servers and it is marked as `isFinal`, we parse it for intents and commands with regular expressions.

In addition to parsing out measurements, a speaker can also command the page to `stop listening`, `clear everything`, or load a previous customer's profile. (Look at the code for phrasing.)

#### Intent phrasing permutations
We used a few variations of phrasing for measurements, starting from the intents enumerated in Dialogflow in the previous version. Here are some examples that we trained the regular expressions against.

```
Your waist is 22
you have a 44 inch neck a 33 inch sleeve
22 chest 
chest 22
i think your nick is 15 in
the chest is 32 inches
your sleeps 15
you have a size 15 chest
your chest is size 15

your chest is 34 and 3/4 in
your chest is 34 in 3/4 inches
chest 22 and a half
chest 22 in 1/4
chest 21 and a quarter
chest is 21.3cm
22 1/4 chest
```

These phrasings are based on what we got back from the speech transcription. 

We parse out decimal measurements as well as fractions (half, fourths, eighths), converting them to decimals.

#### Homophones
We also tested phrases in the browser to see what the Web Speech API returned, and added several words that our target word was often mistaken for.  

- `neck` => `Nick`, `next`
- `sleeve` => `sleep`, `sleeps`, `sneeze`
- `waist` => `waste`, `weight`, `wasted`, `waze`
- `chest` => `chaste`, `justice`, `chaise`

#### The whole chimichanga
You can explore the regular expression in full [in this regexr](https://regexr.com/4vjdu) (a regular expression REPL). Here is an explanation of what each part does:

```javascript
// BREAK DOWN THIS MASSIVE REGULAR EXPRESSION
/
(neck|nick|chest|chaste|waist|waste|sleeve|sleep|sleeves|...)          //body part and homophones
(?: size| length)? (?:is |measures )?(?:about )?(?:a )?(?:size )?      //optional length|is|about|a|size
\d+[.]?\d?                                                             //support number + opt. decimal
( (and |in )?(a )?(([1-7][/](2|4|8))|(half|quarter|three quarters)))?  //support 1/8-7/8, 1/4-3/4
\s?(inch|inches|in|cm|centimeters)?                                    //units
|                                                                      //or
\d+[.]?\d?                                                             //(same for reverse order)
( (and |in )?(a )?(([1-7][/](2|4|8))|(half|quarter|three quarters)))?
\s?(inch|inches|in|cm|centimeters)?
 (neck|nick|chest|chaste|waist|waste|sleeve|sleep|sleeves|...)
/
i                                                                      //case insensitive
g                                                                      //globally throughout string
```

### Waveform visualization

We're using a pared-down version of the [MDN voice-change-o-matic demo](https://mdn.github.io/voice-change-o-matic/). It can be styled by changing the CSS `backgroundColor` and `color` of the `canvas#waveform` element.

### Metric conversions

We store the value given in both inches and centimeters, so they can be easily switched between.

## Roadmap of future features

- An option to switch langauges? Google supports speech recognition in other languages, but the language needs to be set when the recognizer is instatiated. We don't know if it supports multi-lingual speech (e.g., *switching between English and French*) but doubt that it does.
- Use a grammar list? The Web Speech API allows you to [limit the words being recognized with a grammar](https://www.w3.org/TR/jsgf/), and this could be simpler and more expandable than our regular expressions usage.
- Styled waveform implementation. For the sake of time, we're making the comps look like the waveform, instead of the other way around.