import React from 'react' 
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker, ProviderPropType, Callout } from 'react-native-maps' 
import color from '../styles/colors'

const { width, height } = Dimensions.get('window')
const LATITUDE = 28.632996
const LONGITUDE = -106.069099
const ASPECT_RATIO = width / height 
//const latJOB = 28.5760
//const lonJOB = 	-106.9772
const LATITUDE_DELTA = .005
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO 
let id = 0 

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}` 
}

class ReactMap extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
      markers: [],
      dataSource: [],
      error: null
    } 
  }

  // OnMapPress
  onMapPress(e) {
    
  }

  componentDidMount(){
    Geolocation.getCurrentPosition(position => {
      console.log(position)
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      })
    }, error => this.setState({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 })

    fetchJobs().then((fetchedJobs) => {
      // This is what bad code looks like...
        var coordArray = [
          {
            latitude: 28.637521,
            longitude: -106.066234
          },
          {
            latitude: 28.630926,
            longitude: -106.068015
          },
          {
            latitude: 28.630493,
            longitude: -106.074452
          },
          {
            latitude: 28.636080,
            longitude: -106.075633
          },
          {
            latitude: 28.637135, 
            longitude: -106.070365
          },
          {
            latitude: 28.637521,
            longitude: -106.066234
          },
          {
            latitude: 28.637582,
            longitude: -106.059840
          },
          {
            latitude: 28.650947,
            longitude: -106.086358
          },
          {
            latitude: 28.654647,
            longitude: -106.098364
          },
          {
            latitude: 28.659280, 
            longitude: -106.088041
          },
          {
            latitude: 28.661088,
            longitude: -106.091067
          },
          {
            latitude: 28.662331, 
            longitude: -106.095155
          },
          {
            latitude: 28.666003,
            longitude: -106.096132
          },
          {
            latitude: 28.666078,
            longitude: -106.099040
          },
          {
            latitude: 28.665202,
            longitude: -106.101540
          },
          {
            latitude: 28.665371,
            longitude: -106.105167
          },
          {
            latitude: 28.665740, 
            longitude: -106.098737
          },
          {
            latitude: 28.667811,
            longitude: -106.097042
          },
          {
            latitude: 28.670193,
            longitude: -106.094006
          },
          {
            latitude: 28.672283,
            longitude: -106.091968
          },
          {
            latitude: 28.674006,
            longitude: -106.092719
          },
          {
            latitude: 28.673912, 
            longitude: -106.095365
          },
          {
            latitude: 28.677388,
            longitude: -106.094163
          },
          {
            latitude: 28.679299,
            longitude: -106.095493
          },
          {
            latitude: 28.681332, 
            longitude: -106.097639
          },
          {
            latitude: 28.689342,
            longitude: -106.084584
          },
          {
            latitude: 28.712293,
            longitude: -106.094518
          },
          {
            latitude: 28.719956,
            longitude: -106.101585
          },
          {
            latitude: 28.726823, 
            longitude: -106.094745
          },
          {
            latitude: 28.727606,
            longitude: -106.105479
          },
          {
            latitude: 28.734324,
            longitude: -106.129130
          },
          {
            latitude: 28.735133,
            longitude: -106.133121
          },
          {
            latitude: 28.734239, 
            longitude: -106.151778
          },
          {
            latitude: 28.734653,
            longitude: -106.164803
          },
          {
            latitude: 28.754844,
            longitude: -106.127086
          },
          {
            latitude: 28.577669,
            longitude: -106.031694
          },
          {
            latitude: 28.580208,
            longitude: -106.046316
          },
          {
            latitude: 28.588198,
            longitude: -106.041794
          },
          {
            latitude: 28.594280,
            longitude: -106.042847
          },
          {
            latitude: 28.606503,
            longitude: -106.043187
          },
          {
            latitude: 28.616300, 
            longitude: -106.055374
          },
          {
            latitude: 28.617088,
            longitude: -106.077573
          },
          {
            latitude: 28.617415, 
            longitude: -106.088980
          },

        ]

        for(let i = 0; i < fetchedJobs.totalJobs; i++){
          //console.log(fetchedJobs)
          console.log(fetchedJobs.jobs[i].name)
          this.setState({
            markers: [
              ...this.state.markers,
              {
                coordinate: coordArray[i],
                key: id++,
                title: fetchedJobs.jobs[i].name,
                description: fetchedJobs.jobs[i].description,
                amount: fetchedJobs.jobs[i].amountPayment
                //color: randomColor()
              },
            ],
          });
        }
      }).catch(e => {console.log(e)})
  }

  // View render function
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        backgroundColor={color.LIGHTPRIMARYCOLOR}
        barStyle='dark-content'
        translucent={true} />
        <MapView
          provider={this.props.provider}
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
          onPress = {e =>{this.onMapPress(e)}}
        >

          {this.state.markers.map((marker, dataSource) => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              title = {marker.title}
              description = {marker.description}
              image = {require('../assets/images/jobmarker.png')}
            >
            <Callout tooltip>
              <View>
                <View style = {styles.bubble}> 
                <Text style = {styles.name}>{marker.title}</Text>
                <Text>{marker.description}</Text>
          <Text>Pago: {marker.amount}</Text>
                  <Image
                    style = {styles.image}
                    source = {require('../assets/images/logo.png')}
                  />
                </View>
                <View style = {styles.arrowBorder}/>
                <View style = {styles.arrow}/>
              </View>
            </Callout>
          </Marker>
          ))}   

          <Marker
            coordinate = {{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            image = {require('../assets/images/bluemarker.png')}
            title = "Ubicación"
          >
          </Marker>

            

        </MapView>
      </View>
    ) 
  }
}

// TODO Fix this
async function getPosition(){
    if (true) {
        Geolocation.getCurrentPosition(
            (position) => {
              console.log(position);
            },
            (error) => {
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }
}

async function fetchJobs(){
  try {
    const response = await fetch('https://8bd0887c64ba.ngrok.io/jobs/fetchalljobs', {
      method: 'GET'
    });
    
    let jsonRes = await response.json();
      //console.log(jsonRes)
      return jsonRes
  } catch (error) {
    return null
  }
}

ReactMap.propTypes = {
  provider: ProviderPropType,
} 

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 15,
    width: 150
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: 'transparent',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#000',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    marginBottom: -20
  },
  name: {
    fontSize: 16,
    marginBottom: 5,  
    fontFamily: "roboto-regular"
  }, 
  image: {
    width: 40,
    height: 40,
    marginTop: 10,
    alignSelf: 'center'
  }
})  

export default ReactMap
