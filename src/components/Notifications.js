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
        var currentDate = new Date();
        var startDate = new Date(val.startDate)
        var publishDate = new Date(val.publishDate)
        startDate = startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate()
        var auxPublishDate = publishDate.getFullYear() + '-' + (publishDate.getMonth() + 1) + '-' + publishDate.getDate()
        currentDate = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate()
        
        return <View key={key}>
          {
          currentDate != auxPublishDate? <Text>El trabajo {val.name} ha sido publicado</Text> : 
          val.isActive == 'false'? <Text>El trabajo {val.name} se canceló</Text> :
          startDate == currentDate? <Text>El trabajo {val.name} se canceló</Text>: null
        }
            <Text>Categoría: {val.category}</Text>
            <Image style={styles.tinyLogo}
            source={{uri: val.description_img}}/>
            </View>
      });
      return(
        <View>
          <ScrollView>
          {notify}
          </ScrollView>
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
