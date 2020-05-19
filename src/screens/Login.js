import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView
}from "react-native";
import { mainStyles, loginStyles } from '../styles/styles'
import MyTextInput from '../components/MyTextInput'
import color from '../styles/colors'

function goToScreen(props, routeName){
  props.navigation.navigate(routeName)
}

//Componente funcional
export default function Login(props){ 
  
  const [hidePassword, setHidePassword] = useState(false)

    return(

      <View style={[mainStyles.container]}>
        <ScrollView>
        <StatusBar backgroundColor={color.PRIMARYCOLOR} translucent ={true}/>
        <View style={loginStyles.logo}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{height: 200, width: 200}}
          />
        </View>
        <MyTextInput
          keyboardType="email-address"
          placeholder="Email"
          image="user"
        />
        <MyTextInput
          keyboardType={null}
          placeholder="Contraseña"
          image="lock"
          bolGone={true}
          secureTextEntry={hidePassword}
          onPress={() => setHidePassword(!hidePassword)}
        />

        <View style={loginStyles.btnMain}>
          <TouchableOpacity>
            <Text style={[mainStyles.btntxt]}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
        <View style={mainStyles.btnSecond}> 
          <TouchableOpacity onPress={()=> goToScreen(props, 'SignUp')}>
            <Text style={mainStyles.btntxt}>Registro</Text>
          </TouchableOpacity>
        </View>
        <View> 
          <TouchableOpacity onPress={()=> goToScreen(props, 'RecoverPassword')}>
            <Text style={[mainStyles.txtSecond, 
              {textDecorationLine: 'underline'}]}>
              Olvide mi contraseña
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
