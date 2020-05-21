
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, BackHandler } from 'react-native';
import { mainStyles } from '../styles/styles'

import { UsuarioContext } from '../context/UsuarioContext'
import MyButton from '../components/MyButton'
import ReactMap from '../components/ReactMap'

export default function MainLogin(props) {

  useBackButton(SignOff)

  const [login, loginAction] = useContext(UsuarioContext)

  return (
    <View style={mainStyles.container}>
      <ReactMap>
      </ReactMap> 
      <View style={styles.buttonContainer}>
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
