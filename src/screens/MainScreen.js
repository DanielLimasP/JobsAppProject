//import * as React from 'react';
//import { Text, View } from 'react-native';
import color from '../styles/colors'
import { mainStyles } from '../styles/styles'
import MyButton from '../components/MyButton'
import ReactMap from '../components/ReactMap'
import React, { useContext, useEffect } from 'react';
import { UsuarioContext } from '../context/UsuarioContext'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Alert, BackHandler, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

function RecordScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ margin:10, marginTop:30, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            alignItems:'center',
            justifyContent:'center',
            width:42,                
            height:42,
            backgroundColor: color.SECONDARYCOLOR,
            borderRadius:50,
          }}
        >
          <Ionicons name='md-menu' size={32} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity            
          style={{              
            alignItems:'center',
            justifyContent:'center',
            width:42,
            height:42,
            backgroundColor: color.SECONDARYCOLOR,
            borderRadius:50,            
          }}
        >
          <Ionicons name='ios-notifications' size={32} color='white'/>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Record</Text>
      </View>
    </View>
  );
}

function JobsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ margin:10, marginTop:30, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            alignItems:'center',
            justifyContent:'center',
            width:42,                
            height:42,
            backgroundColor: color.SECONDARYCOLOR,
            borderRadius:50,
          }}
        >
          <Ionicons name='md-menu' size={32} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity            
          style={{              
            alignItems:'center',
            justifyContent:'center',
            width:42,
            height:42,
            backgroundColor: color.SECONDARYCOLOR,
            borderRadius:50,            
          }}
        >
          <Ionicons name='ios-notifications' size={32} color='white'/>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Jobs</Text>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MainLogin(props) {
  useBackButton(SignOff)
  const [login, loginAction] = useContext(UsuarioContext)

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Record') {
              iconName = 'md-bookmarks';
              color = focused ? color.PRIMARYCOLOR : '#51aadf';
            } else if (route.name === 'Map') {
              iconName = 'md-locate';//md-'somethig' for android logo style
              color = focused ? color.PRIMARYCOLOR : '#51aadf';
            } else {
              iconName = 'ios-briefcase';//ios-'somethig' for ios logo style
              color = focused ? color.PRIMARYCOLOR : '#51aadf';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: color.PRIMARYCOLOR,
          inactiveTintColor: color.SECONDARYCOLOR,
          showIcon: true
        }}
      >
        <Tab.Screen name="Record" component={RecordScreen}/>
        <Tab.Screen name="Map" component={MapScreen} defa/>
        <Tab.Screen name="Jobs" component={JobsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );

  function MapScreen() {
    return (
      <View style={{ flex: 1 }}>
        <ReactMap/>
        <View style={{ margin:10, marginTop:30, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              alignItems:'center',
              justifyContent:'center',
              width:42,                
              height:42,
              backgroundColor: color.SECONDARYCOLOR,
              borderRadius:50,
            }}
          >
            <Ionicons name='md-menu' size={32} color='white'/>
          </TouchableOpacity>
          <TouchableOpacity            
            style={{              
              alignItems:'center',
              justifyContent:'center',
              width:42,
              height:42,
              backgroundColor: color.SECONDARYCOLOR,
              borderRadius:50,            
            }}
          >
            <Ionicons name='ios-notifications' size={32} color='white'/>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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

function useBackButton(handler) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handler)

    return () => {
      console.log('hardwareBackPress Close')
      BackHandler.removeEventListener("hardwareBackPress", handler)
    }
  }, [handler])
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

