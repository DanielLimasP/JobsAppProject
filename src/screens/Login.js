import React, { useState } from "react";
import { 
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image
}from "react-native";
import { loginStyles } from '../styles/styles'
import MyTextInput from '../components/MyTextInput'
import color from '../styles/colors'

//Componente funcional
export default function Login(){ 
  
  const [hidePassword, setHidePassword] = useState(false)

    return(
      <View style={[loginStyles.container]}>
        <StatusBar backgroundColor={color.PRIMARYCOLOR} translucent ={true}/>
        <View style={loginStyles.logo}>
          <Image source={require('../assets/images/logo.png')} style={{height:200, width: 200}}/>
        </View>
        <MyTextInput keyboardType='email-address' placeholder='Email' image='user'/>
        <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock'
        bolGone = {true} secureTextEntry= {hidePassword}
        onPress = {()=> setHidePassword(!hidePassword)}/>
        
        <View style={loginStyles.btnMain}> 
          <TouchableOpacity>
            <Text style={[loginStyles.btntxt]}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
        <View style={loginStyles.btnRegistro}> 
          <TouchableOpacity>
            <Text style={loginStyles.btntxt}>Registro</Text>
          </TouchableOpacity>
        </View>
        <View> 
          <TouchableOpacity>
            <Text style={[loginStyles.txtTransparent, {textDecorationLine: 'underline'}]}>Olvide mi contraseña</Text>
          </TouchableOpacity>
        </View>
      </View>

  )
    
}
