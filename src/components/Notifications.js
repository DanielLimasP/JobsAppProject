/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator, 
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    }
  }

  componentDidMount(){
    return fetch('https://sergioreactnotifications.000webhostapp.com/noti.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.job
      })
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View>
          <ActivityIndicator/>
        </View>
      )
    } else {
      let notify = this.state.dataSource.map((val, key) => {
        return <View key={key}>
            <Text>{val.name} {val.publishDate} {val.category}</Text>
            <Image 
            source={{uri: 'https://www.interstellarrift.com/wiki/images/8/81/Hammer.png'}}/>
            </View>
      });
      return(
        <View>
          {notify}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
/*
const App = () => {
  const [notiStatus, setNotiStatus] = useState('Ultimas Notificaciones');
  const [notifiacation, setNotification] = useState(
    [{key: 1, message: "Has recibido una solicitud de trabajo", name: "Jose Jimenez", jobType: "Barrer hojas"},
    {key: 2, message: "Has recibido una solicitud de trabajo", name: "Adame Barrio", jobType: "Comprar mandado"},
    {key: 3, message: "Has recibido una solicitud de trabajo", name: "Adrian Salvado", jobType: "Pintar pared"},
    {key: 4, message: "Has recibido una solicitud de trabajo", name: "Melissa Torres", jobType: "Reparar tuberias"},
    {key: 5, message: "Has recibido una solicitud de trabajo", name: "Alessia Guntaro", jobType: "Exterminar"}]
  )
  return (
    <View>
      <Text>{notiStatus}</Text>
      <ScrollView>
    {notifiacation.map((item) => {
      return ( 
        <View>
          <Text>{item.message}, {item.name} sobre {item.jobType}</Text>
        </View>
      )
    })}
    </ScrollView>
    </View>
  );
}
*/
