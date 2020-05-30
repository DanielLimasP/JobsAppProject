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

const ASPECT_RATIO = width / height 
const LATITUDE = 28.632996
const LONGITUDE = -106.069099
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
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
      dataSource: []
    } 
  }

  // OnMapPress
  onMapPress(e) {
    
  }

  componentDidMount(){
    fetchJobs().then((fetchedJobs) => {
        var coordArray = [
          {
            latitude: 28.637521,
            longitude: -106.066234
          },
          {
            //28.630926, -106.068015
            latitude: 28.630926,
            longitude: -106.068015
          },
          {
            //28.630493, -106.074452
            latitude: 28.630493,
            longitude: -106.074452
          },
          {
            //28.630493, -106.074452
            latitude: 28.630493,
            longitude: -106.074452
          },
          {
            //28.634423, -106.075005
            latitude: 28.634423,
            longitude: -106.075005
          },
          {
            //28.636080, -106.075633
            latitude: 28.636080,
            longitude: -106.075633
          },
          {
            //28.637135, -106.070365
            latitude: 28.637135,
            longitude: -106.070365
          },
          {
            //28.637521, -106.066234
            latitude: 28.637521,
            longitude: -106.066234
          },
          {
            //28.632996, -106.069099
            latitude: 28.632996,
            longitude: -106.069099
          }
        ]
        for(let i = 0; i < 9; i++){
          //console.log(fetchedJobs)
          console.log(fetchedJobs.jobs[i].name)
          this.setState({
            markers: [
              ...this.state.markers,
              {
                coordinate: coordArray[i],
                key: id++,
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
          initialRegion={this.state.region}
          onPress = {e =>{this.onMapPress(e)}}
        >

          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              title = "Job title"
              description = "Job description"
              image = {require('../assets/images/jobmarker.png')}
            >
            <Callout tooltip>
              <View>
                <View style = {styles.bubble}> 
                  <Text style = {styles.name}>Trabajo de la joyeria</Text>
                  <Text>Ven a trabajar a la joyeria</Text>
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
              latitude: LATITUDE,
              longitude: LONGITUDE
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
    const response = await fetch('http://9d1fedb2.ngrok.io/jobs/fetchalljobs', {
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
    width: 80,
    height: 60,
    marginTop: 20,
    alignSelf: 'center'
  }
})  

export default ReactMap
