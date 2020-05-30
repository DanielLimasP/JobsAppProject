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
      markers: []
    } 
  }

  // OnMapPress Event
  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
        },
      ],
    });
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
          onPress={e => this.onMapPress(e)}
        >

          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              title = "Test title"
              description = "Test description"
              image = {require('../assets/images/jobmarker.png')}
            >
            <Callout tooltip>
              <View>
                <View style = {styles.bubble}> 
                  <Text style = {styles.name}>Trabajo de la Joyeria</Text>
                  <Text>Ven a trabajar para mi...</Text>
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
            image = {require('../assets/images/marker.png')}
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
