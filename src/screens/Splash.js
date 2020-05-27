import React, { useEffect } from 'react';
import {
  View,
  StatusBar,
  Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { splashStyles } from '../styles/styles';
//import { useTheme } from '@react-navigation/native';
//import { getUsuario } from '../storage/UsuarioAsyncStorage';
//import { UsuarioContext } from '../context/UsuarioContext';

const Splash = ({ navigation }) => {  //Recupera el contexto
  //const [login, loginAction] = useContext(UsuarioContext)
  //Se realiza el efecto solo en la creacion de sesion
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 4000)
  }, [])

  return (

    <View style={splashStyles.image}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />
      <Animatable.Image
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{
          width: 200,
          height: 200,
          margin: 50,
        }}
        source={require('../assets/images/logo.png')}
      />
      <View style={splashStyles.txtWelcomeStack}>
        <Text style={splashStyles.txtWelcome}>Bienvenido a JaleJale</Text>
        <Text style={splashStyles.txtSlogan}>
          ¡La plataforma para hacer jalesitos sencillos!
            </Text>
      </View>
    </View>
  );
  /*
    //Control del efecto segun el estado
    async function fetchSesion(loginAction) {
      const response = await getUsuario()
      console.log(response)
  
      if (response == null) {
        setTimeout(() => {
          goToScreen('Login')
        }, 4000)
        return
      }
  
      loginAction({ type: 'sign-in', data: response })
      setTimeout(() => {
        goToScreen('MainScreen')
      }, 1000)
    }
    */
  /*
    //Metodo para saltar de la pantalla Splash a Login
    function goToScreen(routeName) {
      props.navigation.replace(routeName);
    }
  */

};

export default Splash;
