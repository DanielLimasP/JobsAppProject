import React from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView
} from "react-native";
import { mainStyles, signUpStyles } from '../styles/styles'
import * as Animatable from 'react-native-animatable';
import MyTextInput from '../components/MyTextInput'
import color from '../styles/colors'
import MyButton from '../components/MyButton'


function goToScreen(props, routeName) {
  props.navigation.navigate(routeName)
}

export default function RecoverPassword(props) {
  return (
    <View style={signUpStyles.container}>
      <StatusBar backgroundColor={color.PRIMARYCOLOR} barStyle="light-content" />
      <View style={signUpStyles.header}>
        <Text style={signUpStyles.text_header}>Recuperar contraseña</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={signUpStyles.footer}
      >
        <ScrollView
          keyboardDismissMode='on-drag'
          keyboardShouldPersistTaps='always'
          style={{ backgroundColor: color.WHITE }}>
          <View style={{ padding: 30 }, mainStyles.container}>
            <Text style={mainStyles.titleText}>{'\n'}</Text>
            <MyTextInput keyboardType='email-address' placeholder='Email' image='user' />
            <MyButton
              titulo='Recuperar'
              onPress={() => goToScreen(props, 'Login')}
            />
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  )
}
