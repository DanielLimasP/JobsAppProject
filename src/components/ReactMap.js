import React from 'react' 
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

import MapView, { Marker, ProviderPropType } from 'react-native-maps' 
import color from '../styles/colors'
const { width, height } = Dimensions.get('window') 

const ASPECT_RATIO = width / height 
const LATITUDE = 28.632996
const LONGITUDE = -106.069099
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
    } 
  }

  // OnMapPress Event
  onMapPress(e) {
    
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
        </MapView>
      </View>
    ) 
  }
}

ReactMap.propTypes = {
  provider: ProviderPropType,
} 

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
}) 

export default ReactMap