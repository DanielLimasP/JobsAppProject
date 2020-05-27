import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput
} from "react-native";
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { mainStyles, signUpStyles, loginStyles } from '../styles/styles'
import color from '../styles/colors'
import MyButton from '../components/MyButton'



const RecoverPassword = ({ navigation }) => {
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
            <View style={loginStyles.action}>
              <FontAwesome
                name="envelope-o"
                color={color.PRIMARYCOLOR}
                size={24}
              />
              <TextInput
                placeholder="Correo"
                style={signUpStyles.textInput}
                autoCapitalize="none"
              />
            </View>
            <MyButton
              titulo='Recuperar'
              onPress={() => {navigation.goBack()}}
            />
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  )

}

export default RecoverPassword;
