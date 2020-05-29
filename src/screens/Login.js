import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  ScrollView
} from "react-native";

import { mainStyles, loginStyles } from '../styles/styles';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import color from '../styles/colors';
import { UsuarioContext } from '../context/UsuarioContext';

//Componente funcional
export default function Login(props) {

  const [login, loginAction] = useContext(UsuarioContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(false)

  return (
    <ScrollView keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      style={{ backgroundColor: color.WHITE }}>
      <View style={[mainStyles.container]}>
        <StatusBar backgroundColor={color.PRIMARYCOLOR} translucent={true} />
        <View style={loginStyles.logo}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{ height: 200, width: 200 }}
          />
        </View>
        <MyTextInput
          keyboardType="email-address"
          placeholder="Email"
          image="user"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <MyTextInput
          keyboardType={null}
          placeholder="Contraseña"
          image="lock"
          bolGone={true}
          secureTextEntry={!hidePassword}
          onPress={() => setHidePassword(!hidePassword)}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />

        <MyButton
          titulo='Iniciar Sesión'
          onPress={() => fetchLogIn()}
        />
        <MyButton
          trasparent={true}
          titulo='Registro'
          style={mainStyles.btnSecond}
          onPress={() => goToScreen('SignUp')}
        />

        <View >
          <TouchableOpacity onPress={() => goToScreen('RecoverPassword')}>
            <Text style={[mainStyles.txtSecond, { textDecorationLine: 'underline' }]}>
              Olvide mi contraseña
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  async function fetchLogIn() {
    if (email.length == 0 || password.length == 0) {
      Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
        { text: 'Okay' }
      ]);
      return;
    }
    iniciarSesion()
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 sec
    goToScreen('Splash')
  }

  function iniciarSesion() {
    loginAction({
      type: 'sign',
      data: {
        email,
        password
      }
    })
    
  }

  function goToScreen(routeName) {
    props.navigation.navigate(routeName)
  }
}
