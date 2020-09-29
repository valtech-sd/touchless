import React from 'react';
import styles from './App.css';
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import natural from 'natural';
import nlp from 'compromise'
import { Avatar, Divider } from '@material-ui/core';
import AudioAnalyser from './AudioAnalyser'; 

//images
import valtech_logo from './images/group.svg';
import employee_img from './images/employee.jpg';
import high_five from './images/success.png';
import customer_img from './images/customer-profile@3x.png'
import waveform from './images/waveform.png'
import preferences_icon from './images/image-2@3x.png'
import lifestyle_icon from './images/image-3@3x.png'
import hoodie_image from './images/item-3@3x.png'
import coffee_image from './images/item@3x.png'
import generic_image from './images/item-2@3x.png'
import water_bottle from './images/water-bottle.jpg'
import tshirt_white from './images/tshirt-white.jpg'
import tshirt_black from './images/tshirt-black.jpg'
import tshirt_red from './images/tshirt-red.jpg'

const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#651fff'),
    backgroundColor: '#3700ff',
    boxShadow: 24,
    fontFamily: 'Poppins',
    '&:hover': {
      backgroundColor: '#651fff',
    },
  },
}))(Button);


class EmployeeCard extends React.Component {
  render() {
    return (
      <Card variant="outlined" flex-direction='row' style={{borderRadius:0}}>
        <CardContent>
          <Grid container spacing={3} direction="row" alignItems='center'>
            <Grid item xs={6}>
              <img src={valtech_logo} alt="logo" style={{height:20, borderRadius:0}}/>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={3} direction="row-reverse" alignItems="center">
                <h1 style={{marginLeft: 16, marginRight:16, color: "grey"}}>Associate Name</h1>
                <Avatar alt="Employee Name" src={employee_img}/>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

class OscilloscopeDiv extends React.Component {
  render() {
    return (
      <Grid container spacing={3} direction="row" alignItems="center">
        <Grid item xs={6}>
          <img src={high_five} alt="avatar"/>
        </Grid>
        <Grid item xs={6}>
          <div>
            <button onClick={this.toggleMicrophone}>
              {this.state.audio ? 'Stop microphone' : 'Get microphone input'}
            </button>
            {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}
          </div>
        </Grid>
      </Grid>   
      )
  }
}

class ProfileCard extends React.Component {
  render() {
    const classes = {};
    return (
      <Card variant="outlined" style={{padding:14, borderRadius:25}}>
        <CardContent>
        <Typography className={classes.title} gutterBottom style={{fontFamily:'Poppins', fontWeight:'bold', fontSize: 20, marginBottom:20}}>
            Customer Profile
        </Typography>
        <Grid container spacing={4} direction="row">
          <Grid item xs={2}>
            <img src={customer_img} alt="client" style={{height:86, width:86}}/>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="h2" gutterBottom style={{color:'#3700ff', fontFamily:'Poppins', fontWeight:'bold', fontSize:18, marginLeft:24}}>
              { this.props.name }
            </Typography>
            <h1 style={{fontSize:14, fontWeight:'bold', marginLeft:24}}>Company : {this.props.company}</h1>
          </Grid>
        </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ () => this.props.profileToggle(true) }>Listen</Button>
          <Button size="small" onClick={ () => this.props.profileToggle(false) }>Confirmed</Button>
          {/* <ColorButton size="small" onClick={ () => this.props.profileToggle(false) }>Confirmed</ColorButton> */}
        </CardActions>
      </Card>
    )
  }
}

class PreferencesCard extends React.Component {
  render(){
    return (
      <Card variant="outlined" style={{padding:14, borderRadius:25}}>
        <CardContent>
          <Typography gutterBottom style={{fontFamily: 'Poppins', fontWeight:'bold', fontSize: 20, marginBottom:20}}>
            Preferences
          </Typography>
          <Grid container spacing={4} direction="row">
            <Grid item xs={2}>
              <img src={preferences_icon} alt="client" style={{height:80, width:80}}/>
            </Grid>
            <Grid item xs={6}>
              {/* <Typography variant="h5" component="p" style={{fontFamily: 'Poppins', fontWeight:'bold', fontSize:18, marginLeft:24}}>
                { this.props.style }
              </Typography> */}
              <h1 style={{fontSize:14, fontWeight:'bold', marginLeft:24, marginTop:0}}> Style: { this.props.style } </h1>
              <h1 style={{fontSize:14, fontWeight:'bold', marginLeft:24}}> Colour: { this.props.colour } </h1>
              <h1 style={{fontSize:14, fontWeight:'bold', marginLeft:24}}> Size: { this.props.size } </h1>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ () => this.props.preferencesToggle(true) }>Listen</Button>
          <Button size="small" onClick={ () => this.props.preferencesToggle(false) }>Confirmed</Button>
        </CardActions>
      </Card>
    )
  }
}

class LifestyleCard extends React.Component {
  render(){ 
    const classes = {};
    return (
      <Card className={classes.root} variant="outlined" style={{padding:14, borderRadius:25}}>
        <CardContent>
        <Typography className={classes.title} gutterBottom style={{fontFamily: 'Poppins', fontWeight:'bold', fontSize: 20, marginBottom:20}}>
          Lifestyle
        </Typography>
        <Grid container spacing={4} direction='row'>
          <Grid item xs={2}>
            <img src={lifestyle_icon} alt="client" style={{height:80, width:80}}/>
          </Grid>
          <Grid item xs={6}>
            <h1 style={{fontSize:14, fontWeight:'bold', marginLeft:24, marginTop:0}}> Destination: { this.props.destination } </h1>
            <h1 style={{fontSize:14, fontWeight:'bold', marginLeft:24}}> Climate: { this.props.climate } </h1>
            <h1 style={{fontSize:14, fontWeight:'bold', marginLeft:24}}> Beverage: { this.props.beverage } </h1>
          </Grid>
        </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ () => this.props.lifestyleToggle(true) }>Listen</Button>
          <Button size="small" onClick={ () => this.props.lifestyleToggle(false) }>Confirmed</Button>
        </CardActions>
      </Card>
    )
  }
}

class CustomerCartCard extends React.Component {
  render(){
    const classes = {};
    return (
      <Card className={classes.root} variant="outlined" style={{height:"96.37%", borderRadius:25, padding:14}}>
        <CardContent>
          <Typography className={classes.title} gutterBottom style={{fontFamily: 'Poppins', fontSize: 24}}>
            Customer Cart
          </Typography>
          <Grid container direction="row">
            <Grid item xs={6}>
              <h1 style={{color:"grey"}}> Items </h1>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="row-reverse">
                <h1 style={{color:"grey"}}> Qty </h1>
              </Grid>
            </Grid>
          </Grid>
          <Divider light/>
          <Grid container direction="column">
            {/* <Grid item> */}
              <ProductCards 
                products={this.props.products}
                removeItem = {this.props.removeItem} 
              />
            {/* </Grid> */}
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container direction="row-reverse">
            <ColorButton size="small" style={{width:209, height:71, fontWeight:'bold'}}>Prepare Order</ColorButton>
          </Grid>
        </CardActions>
      </Card>
    )
  }
}

class ProductCards extends React.Component {
  render(){
    return (
      this.props.products.length > 0 && this.props.products.map((item, index) => {
        return (
          <Box marginTop={2}>
                <Grid container direction="row">
                  <Grid item xs>
                    <img src={item.imageName} style={{height:80, width:80}}/>
                  </Grid>
                  { item.productSize ? 
                    <Grid item xs={6}> 
                      <h1 style={{fontSize:16}}>{item.productName}</h1>
                      <h1 style={{color: "grey"}}>Size: {item.productSize}</h1>
                    </Grid>
                    :
                    <Grid item xs={6}> 
                      <h1 style={{fontSize:16}}>{item.productName}</h1>
                    </Grid>
                  }
                  <Grid item xs>
                    <Grid container direction="column">
                      <Grid item xs>
                        <Grid container justify="flex-end">
                          <h1 style={{fontSize:16, marginBlottom:0}}>1</h1>
                        </Grid>
                      </Grid>
                      <Grid item xs>
                        <Grid container justify="flex-end">
                          <h1 style={{fontSize:16, color: item.textColor, margin:0}}>{item.stock}</h1>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              <Grid item>
                <Grid container direction="row-reverse">
                  <ColorButton size="small" onClick={()=>this.props.removeItem(index)}>Remove</ColorButton>
                </Grid>
              </Grid>
              <span>&nbsp;</span> 
              <Divider light/>
          </Box>
        )
      })
    )
  }
}


class App extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      profileToggle: true,
      preferencesToggle: true,
      lifestyleToggle: true,
      cartToggle: true,
      audio: null,
      name: "Name",
      position: " ",
      company: " ",
      size: " ",
      colour: " ",
      style: " ",
      destination: " ",
      climate: " ",
      beverage: " ",
      product1: " ",
      product2: " ",
      product3: " ",
      products: []
    };
    this.removeItem = this.removeItem.bind(this);
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }

  async getMicrophone(){
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    })
    this.setState({ audio });
  }

  stopMicrophone() {
    this.state.audio.getTracks().forEach(track => track.stop());
    this.setState({ audio: null });
  }

  toggleMicrophone() {
    if (this.state.audio) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  }

  profileToggle = (active) => {
    this.setState({
      profileToggle: active
    })
  }

  preferencesToggle = (active) => {
    this.setState({
      preferencesToggle: active
    })
  }

  lifestyleToggle = (active) => {
    this.setState({
      lifestyleToggle: active
    })
  }

  cartToggle = (active) => {
    this.setState({
      cartToggle: active
    })
  }

  removeItem = function(index) {
    var prods = this.state.products
    prods.splice(index, 1)
    this.setState({
      products: prods
    })
  }

  printList = function(doc) {
    return JSON.stringify(doc.out('array'), null, 2)
  }

  componentDidMount() {
    document.title = 'Voice Clienteling'

    if(isChrome){ 
    
      this.getMicrophone()

      var colourClassifier = new natural.BayesClassifier();
      colourClassifier.addDocument('default', 'default');
      colourClassifier.addDocument('grey', 'Grey');
      colourClassifier.addDocument('white', 'White');
      colourClassifier.addDocument('black', 'Black');
      colourClassifier.addDocument('purple', 'Purple');
      colourClassifier.addDocument('blue', 'Blue');
      colourClassifier.addDocument('yellow', 'Yellow');
      colourClassifier.addDocument('orange', 'Orange');
      colourClassifier.addDocument('red', 'Red');
      colourClassifier.addDocument('pink', 'Pink');
      colourClassifier.addDocument('green', 'Green');
      colourClassifier.train();

      var sizeClassifier = new natural.BayesClassifier();
      sizeClassifier.addDocument('default', 'default');
      sizeClassifier.addDocument('extra small', 'Extra Small');
      sizeClassifier.addDocument('small', 'Small');
      sizeClassifier.addDocument('medium', 'Medium');
      sizeClassifier.addDocument('large', 'Large');
      sizeClassifier.addDocument('extra large', 'Extra Large');
      sizeClassifier.train();

      var styleClassifier = new natural.BayesClassifier();
      styleClassifier.addDocument('default', 'default');
      styleClassifier.addDocument('hoodie', 'Hoodie');
      styleClassifier.addDocument('sweatshirt', 'Sweatshirt');
      styleClassifier.addDocument('long sleeve', 'Long Sleeve');
      styleClassifier.addDocument('short sleeve', 'Short Sleeve');
      styleClassifier.addDocument('t-shirt', 'T-Shirt');
      styleClassifier.train();

      var climateClassifier = new natural.BayesClassifier();
      climateClassifier.addDocument('default', 'default');
      climateClassifier.addDocument('hot', 'Hot')
      climateClassifier.addDocument('warm', 'Warm');
      climateClassifier.addDocument('cold', 'Cold');
      climateClassifier.addDocument('temperate', 'Temperate');
      climateClassifier.train();

      var beverageClassifier = new natural.BayesClassifier();
      beverageClassifier.addDocument('default', 'default');
      beverageClassifier.addDocument('water', 'Water');
      beverageClassifier.addDocument('coffee', 'Coffee');
      beverageClassifier.addDocument('coke', 'Coke');
      beverageClassifier.addDocument('pepsi', 'Pepsi');
      beverageClassifier.addDocument('beer', 'Beer');
      beverageClassifier.addDocument('sprite', 'Sprite');
      beverageClassifier.addDocument('mountain dew', 'Mountain dew');
      beverageClassifier.addDocument('wine', 'Wine');
      beverageClassifier.addDocument('pop', 'Pop');
      beverageClassifier.addDocument('soda', 'Soda');
      beverageClassifier.train();

      var cityClassifier = new natural.BayesClassifier();
      cityClassifier.addDocument('default', 'default');
      cityClassifier.addDocument('San Diego', 'San Diego');
      cityClassifier.addDocument('Honolulu', 'Honolulu');
      cityClassifier.train();

      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      var recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.lang = 'en-US';
      recognition.start();
      recognition.onend = () => recognition.start() //force restart recognition when it times out
    
      //Listen for detection events
      recognition.addEventListener('result', (e) => {
        let last = e.results.length - 1;
        let text = e.results[last][0].transcript;
        console.log('Confidence: ' + e.results[0][0].confidence);
        console.log('Text detected: ' + text);

        if (this.state.profileToggle) {
          //listen for person's name
          let nameTest = nlp(text).people();
          let nameArray = nameTest.out('array')
          let nameItem = nameArray.map(function(e){
            return e;
          });
          if (nameItem.length >= 1 && nameItem != "Diego") {
            console.log("name item is: " + nameItem)
            this.setState({
              name: nameItem[0]
            })
          }
      
          //listen for company (named entity)
          let companyTest = nlp(text).organizations()
          let companyArray = companyTest.out('array')
          let companyItem = companyArray.map(function(e){
            return e;
          });
          if (companyItem.length >= 1) {
            this.setState({
              company: companyItem
            })
          }

          //listen for word after 'work for'
          let afterCompany = nlp(text).after('work for')
          let afterCompanyArray = afterCompany.out('array')
          let afterCompanyItem = afterCompanyArray.map(function(e){
            return e;
          })
          if (afterCompanyItem.length >= 1) {
            this.setState({
              company: afterCompanyItem
            })
          }

          //listen for word after 'work at'
          let afterCompany2 = nlp(text).after('work at')
          let afterCompanyArray2 = afterCompany2.out('array')
          let afterCompanyItem2 = afterCompanyArray2.map(function(e){
            return e;
          })
          if (afterCompanyItem2.length >= 1) {
            this.setState({
              company: afterCompanyItem2
            })
          }
        }

        if (this.state.preferencesToggle) {

          //listen for colour
          let colour = colourClassifier.classify(text);
          if (colour !== 'default') {
            this.setState({
              colour: colour
            })
          }

          //listen for size
          let size = sizeClassifier.classify(text);
          if (size !== 'default') {
            this.setState({
              size: size
            })
          }

          //listen for style
          let style = styleClassifier.classify(text);
          if (style !== 'default') {
            this.setState({
              style: style
            })
          }

          if (style === 'Hoodie' && this.state.colour !== 'default' && this.state.colour !== 'White') {
            this.setState({
              products: this.state.products.concat([{ productName: "Valtech Hoodie - " + this.state.colour, productSize: this.state.size, imageName: generic_image, stock: "Out of Stock", textColor: "Red"}])
            })
          }

          if (style === 'Hoodie' && this.state.colour === 'White') {
            this.setState({
              products: this.state.products.concat([{ productName: "Valtech Hoodie - White", productSize: this.state.size, imageName: hoodie_image, stock: "In Stock", textColor: "Green"}])
            })
          }

          if (style === 'T-Shirt' && this.state.colour !== 'default' && this.state.colour !== 'White' && this.state.colour !== 'Black' && this.state.colour !== 'Red') {
            this.setState({
              products: this.state.products.concat([{ productName: "Valtech T-Shirt - " + this.state.colour, productSize: this.state.size, imageName: generic_image, stock: "Out of Stock", textColor: "Red"}])
            })
          }

          if (style === 'T-Shirt' && this.state.colour == 'Black') {
            this.setState({
              products: this.state.products.concat([{ productName: "Valtech T-Shirt - Black", productSize: this.state.size, imageName: tshirt_black, stock: "In Stock", textColor: "Green"}])
            })
          }

          if (style === 'T-Shirt' && this.state.colour == 'White') {
            this.setState({
              products: this.state.products.concat([{ productName: "Valtech T-Shirt - White", productSize: this.state.size, imageName: tshirt_white, stock: "In Stock", textColor: "Green"}])
            })
          }

          if (style === 'T-Shirt' && this.state.traincolour == 'Red') {
            this.setState({
              products: this.state.products.concat([{ productName: "Valtech T-Shirt - Red", productSize: this.state.size, imageName: tshirt_red, stock: "In Stock", textColor: "Green"}])
            })
          }
        }

        if (this.state.lifestyleToggle) {

          //listen for destination
          let destinationTest = nlp(text).places();
          let destinationArray = destinationTest.out('array')
          let destinationItem = destinationArray.map(function(e){
            return e;
          });

          if (destinationItem.length >= 1) {
            this.setState({
              destination: destinationItem
            })
          }

          //listen for specific cities not detected by nlp above
          let city = cityClassifier.classify(text);
          if (city !== 'default') {
            this.setState({
              destination: city
            })
          }

          //listen for climate
          let climate = climateClassifier.classify(text);
          let beverage = beverageClassifier.classify(text);
          if (climate !== 'default' && beverage === 'default') {
            this.setState({
              climate: climate
            })
          }

          //listen for beverage
          if (beverage !== 'default') {
            this.setState({
              beverage: beverage
            })
          }

          if (beverage === 'Coffee') {
            this.setState({
              products: this.state.products.concat([{ productName: "Two Lines Coffee Tumbler", imageName: coffee_image, stock: "In Stock", textColor: "Green" }])
            })
          }

          if (beverage === 'Water') {
            this.setState({
              products: this.state.products.concat([{ productName: "Valtech Water Bottle", imageName: water_bottle, stock: "In Stock", textColor: "Green" }])
            })
          }
        }

      })
    }
  }
  
  render() {

    if(isChrome){

      return (
      <div>
        <EmployeeCard/>
        <Container>
          <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
            <Grid item xs={12}>
              <Grid container spacing={3} direction="row" alignItems="center">
                <Grid item xs={6}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <img style={{marginTop:50, marginLeft:26, height:105, width:105}} src={high_five} alt="avatar"/>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" component="h2" style={{color:'#ffffff', fontFamily:'Poppins', fontWeight:'bold', fontSize:18, marginLeft:24}}>
                        Voice Assistant
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <div style={{marginTop:50}}>
                    {/* <button onClick={this.toggleMicrophone}>
                      {this.state.audio ? 'Stop microphone' : 'Get microphone input'}
                    </button> */}
                    {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}
                  </div>
                </Grid>
              </Grid>   
            </Grid>
            
            <Grid item xs={6}>
              <Grid container spacing={3}>

                <Grid item xs={12}>
                  <ProfileCard
                    name={this.state.name} 
                    company={this.state.company}
                    profileToggle={this.profileToggle}
                  />
                </Grid>

                <Grid item xs={12}>
                  <PreferencesCard 
                    colour={this.state.colour}
                    size={this.state.size}
                    style={this.state.style}
                    preferencesToggle={this.preferencesToggle}
                  />
                </Grid>

                <Grid item xs={12}>
                  <LifestyleCard
                    destination={this.state.destination}
                    climate={this.state.climate}
                    beverage={this.state.beverage}
                    lifestyleToggle={this.lifestyleToggle}
                  />
                </Grid>

            </Grid>
          </Grid>

          <Grid item xs={6}>
              <Grid style={{height:"100%"}}>
                <CustomerCartCard
                  products = {this.state.products}
                  removeItem = {this.removeItem} 
                />
              </Grid>
          </Grid>
        </Grid>
        </Container>
        </div>
      );
    } else {
      return (
        <Container>
          <Grid container direction="column" justify="center" alignItems="center" style={{minHeight:'100vh'}}>
            <Grid item>
              <Card style={{borderRadius:25, padding:14}}>
                <Typography>
                  Please use Chrome instead 🤷‍♂️
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      )
    }
  }
}

export default App;


