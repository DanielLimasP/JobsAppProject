

//import * as React from 'react';
//import { Text, View } from 'react-native';
import { mainStyles } from '../styles/styles'
import MyButton from '../components/MyButton'
import ReactMap from '../components/ReactMap'
import React, { useContext, useEffect } from 'react';
import { UsuarioContext } from '../context/UsuarioContext'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Alert, BackHandler } from 'react-native';

function RecordScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Record</Text>
    </View>
  );
}

function JobsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Jobs</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MainLogin(props) {
  useBackButton(SignOff)
  const [login, loginAction] = useContext(UsuarioContext)

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Record" component={RecordScreen} />
        <Tab.Screen name="Map" component={MapScreen} defa/>
        <Tab.Screen name="Jobs" component={JobsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );

  function MapScreen() {
    return (
      <View style={mainStyles.container}>
        <ReactMap/> 
        <View style={styles.bottomContainer}>
          <Text
            style={styles.txtVw}>
            Pantalla Principal{'\n'}Usuario: {'\n' + login.usuario.email}
          </Text>
          <MyButton
            titulo='Cerrar sesion'
            trasparent={true}
            onPress={() => SignOff()}
          />
        </View>
      </View>
    );
  }

  function goToScreen(routeName) {
    props.navigation.navigate(routeName)
  }

  function SignOff(){
    Alert.alert(
      "Salir",
      "¿Seguro que desea cerrar sesión?",
      [
        {
          text: 'Si', onPress:()=>{
            loginAction({
              type: 'sign-out',
              data: {}
          })
          goToScreen('Login')
          }
        },
        {
          text : 'No', onPress: ()=>{}, style:'cancel'
        }
      ]
    )
  }
}

const styles = StyleSheet.create({
  txtVw: {
    textAlign: 'center',
    marginTop: 200,
    fontFamily: 'roboto-regular',
  },
  bottomContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
})

function useBackButton(handler) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handler)

    return () => {
      console.log('hardwareBackPress Close')
      BackHandler.removeEventListener("hardwareBackPress", handler)
    }
  }, [handler])
}
