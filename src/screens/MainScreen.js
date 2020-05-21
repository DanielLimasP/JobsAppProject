
import React, { useContext, useEffect } from 'react';
import { View, Text, StatusBar, Alert, BackHandler } from 'react-native';
import { mainStyles } from '../styles/styles'
import color from '../styles/colors'
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
      
      <StatusBar
        backgroundColor={color.LIGHTPRIMARYCOLOR}
        barStyle='dark-content'
        translucent={true} />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 200,
          fontFamily: 'roboto-regular',
        }}>
        Pantalla Principal{'\n'}Usuario: {'\n' + login.usuario.email}
      </Text>
      <MyButton
        titulo='Cerrar sesion'
        trasparent={true}
        onPress={() => SignOff()}
      />
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
function useBackButton(handler) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handler)

    return () => {
      console.log('hardwareBackPress Close')
      BackHandler.removeEventListener("hardwareBackPress", handler)
    }
  }, [handler])
}
