import React from 'react';
import './App.css';
import Webcam from 'react-webcam'
import natural from 'natural'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

import chanel_image1 from './images/chanel1.jpeg';
import chanel_image2 from './images/chanel2.jpeg';
import chanel_image3 from './images/chanel3.jpeg';
import chanel_image4 from './images/chanel4.jpeg';
import chanel_image5 from './images/chanel5.jpeg';
import chanel_image6 from './images/chanel6.jpeg';

import blankLipstickRed from './images/blankLipstickRed.jpg';
import blankPerfume1 from './images/blankPerfume1.jpg';
import blankLipstickGrey from './images/blankLipstickGrey.jpg';
import blankFoundation1 from './images/blankFoundation1.jpg';
import blankFoundation2 from './images/blankFoundation2.jpg';
import blankEyeliner1 from './images/blankEyeliner1.jpeg';
import blankEyeliner2 from './images/blankEyeliner2.jpeg';


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#651fff'),
    backgroundColor: '#304ffe',
    boxShadow: 24,
    '&:hover': {
      backgroundColor: '#651fff',
    },
  },
}))(Button);

class CustomerCartCard extends React.Component {
  render(){
    const classes = {};
    return (
      <Grid container spacing={3} direction="row">
        <Grid item direction="row">
          <ProductCards products={this.props.products}/>
        </Grid>
      </Grid>
    )
  }
}

class ProductCards extends React.Component {
  render(){
    return (
      <div>
      {
      this.props.products.length > 0 && this.props.products.map((item) => {
        return (
          <div className="inARow">
          <Card>
            <CardContent>
              <Grid container spacing={2} direction="row">
                <Grid item>
                  <img src={item.imageName} alt="client" style={{height:50, width:50}}/>
                </Grid>
                <Grid item>
                  <h2>{item.productName}</h2>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container direction="row-reverse">
                <ColorButton size="small">Add to Cart</ColorButton>
              </Grid>
            </CardActions>
          </Card>
          // </div>
        )
      })
      }
      </div> 
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: '',
      colour: '',
      products: []
    };
  }

  printList = function(doc) {
    return JSON.stringify(doc.out('array'), null, 2)
  }


  componentWillMount() {

    var productClassifier = new natural.BayesClassifier();
    productClassifier.addDocument('default', 'default');
    productClassifier.addDocument('lipstick', 'lipstick');
    productClassifier.addDocument('perfume', 'perfume');
    productClassifier.addDocument('foundation', 'foundation');
    productClassifier.addDocument('tan', 'tan');
    productClassifier.addDocument('tanner', 'tanner');
    productClassifier.addDocument('eyeliner', 'eyeliner');
    productClassifier.train();

    var colourClassifier = new natural.BayesClassifier();
    colourClassifier.addDocument('default', 'default');
    colourClassifier.addDocument('grey', 'grey');
    colourClassifier.addDocument('white', 'white');
    colourClassifier.addDocument('black', 'black');
    colourClassifier.addDocument('purple', 'purple');
    colourClassifier.addDocument('blue', 'blue');
    colourClassifier.addDocument('yellow', 'yellow');
    colourClassifier.addDocument('orange', 'orange');
    colourClassifier.addDocument('red', 'red');
    colourClassifier.addDocument('pink', 'pink');
    colourClassifier.addDocument('dark', 'dark');
    colourClassifier.addDocument('light', 'light');
    colourClassifier.train();

    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onend = () => recognition.start() //force restart recognition when it times out
  
    recognition.addEventListener('result', (e) => {
      let last = e.results.length - 1;
      let text = e.results[last][0].transcript;
      console.log('Confidence: ' + e.results[0][0].confidence);
      console.log('Text detected: ' + text);

      //listen for product
      let product = productClassifier.classify(text);
      console.log("product is: " + product)
      if (product !== 'default') {
        this.setState({
          product: product
        })
      }

      //listen for colour
      let colour = colourClassifier.classify(text);
      if (colour !== 'default') {
        this.setState({
          colour: colour
        })
      }

      if (product === 'lipstick' && colour === 'red') {
        this.setState({
          products: this.state.products.concat([{ productName: "Lipstick - Red", imageName: blankLipstickRed }])
        })
      } 

      if (product === 'lipstick' && colour === 'grey') {
        this.setState({
          products: this.state.products.concat([{ productName: "Lipstick - Grey", imageName: blankLipstickGrey }])
        })
      } 
      
      if (product === 'perfume') {
        this.setState({
          products: this.state.products.concat([{ productName: "Perfume", imageName: blankPerfume1}])
        })
      }

      if (product === 'foundation') {
        this.setState({
          products: this.state.products.concat([{ productName: "Foundation", imageName: blankFoundation1}])
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
      <Container>
        <Grid container style={{position: "relative"}}>
          <Grid item xs={12}>
            <Webcam height={720} width={1280}/>
          </Grid>
          <Grid item xs={12}>
            <div className="overlay">
              <CustomerCartCard products={this.state.products}/>
            </div>
          </Grid>
        </Grid> 
      </Container>
      </div>
    );
  }
}

export default App;
