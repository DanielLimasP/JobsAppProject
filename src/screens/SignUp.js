/*Pendiente inicio con cuenta Google
Tipo de campo (correo,contraseña y fecha)
RadioButton, eliminar texto para control "selected"
*/

import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar
} from 'react-native'
import {
    CheckBox,
    SocialIcon
} from 'react-native-elements'
import RadioButton from '../components/RadioButton';
import MyTextInput from '../components/MyTextInput';
import ToolBar from '../components/ToolBar';
import color from '../styles/colors';
import { mainStyles, signUp } from '../styles/styles';
import MyButton from '../components/MyButton'



const PROP = [
    {
        key: 'hombre',
        text: 'Hombre',
    },
    {
        key: 'mujer',
        text: 'Mujer',
    },
];

export default function SignUp(props) {

    const [hidePassword, setHidePassword] = useState(false)

    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.PRIMARYCOLOR} translucent={true} />
            <ToolBar titulo='Registro'
                onPressLeft={() => goToScreen(props, 'Login')}
                iconLeft={require('../assets/images/back.png')} />
            <View style={mainStyles.container}>
                <Text style={mainStyles.titleText}>Crea tu cuenta</Text>

                <MyTextInput placeholder="Nombre" image='user' />
                <MyTextInput placeholder="Apellido Paterno" image='user' />
                <MyTextInput placeholder="Apellido Materno" image='user' />
                <MyTextInput placeholder="Correo" keyboardType='email-address' image='envelope' />
                <MyTextInput placeholder="Contraseña" keyboardType={null}
                    image='lock' secureTextEntry={hidePassword}
                />
                <MyTextInput placeholder="Confirmar contraseña" keyboardType={null}
                    onPress={() => setHidePassword(!hidePassword)} image='lock' bolGone={true} secureTextEntry={hidePassword}
                />

                <Text style={signUp.textoS}>SEXO:</Text>
                <View style={signUp.container3}>
                    <RadioButton PROP={PROP} />
                </View>
                <Text style={signUp.texto}>FECHA DE NACIMIENTO:</Text>

                <View style={signUp.container3}>
                    <TextInput style={signUp.txtDate} placeholder="DD"></TextInput>
                    <TextInput style={signUp.txtDate} placeholder="MM"></TextInput>
                    <TextInput style={signUp.txtDate} placeholder="AAAA"></TextInput>
                </View>

                <CheckBox
                    containerStyle={signUp.checkbox}
                    textStyle={{ color: color.PRIMARYCOLOR }}
                    title='He leido y acepto los términos y condiciones'
                    checked={false}
                    checkedColor={color.SECONDARYCOLOR} />
                <MyButton
                    titulo='Continuar'
                    onPress={() => {
                        // Aqui hacer un POST a la ruta de signup del usuario


                        goToScreen('Login')}
                    }
                />
                <View >
                <View style={signUp.containerSocial}>
                    <SocialIcon
                        style={signUp.buttonSocialIcon}
                        title='Iniciar con Google'
                        button
                        type='google-plus-official' />
                </View>
                    <TouchableOpacity onPress={() => goToScreen(props, 'Login')}>
                        <Text style={mainStyles.txtSecond}>¿Ya tienes una cuenta?</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
        </ScrollView>
    )

    function goToScreen(routeName) {
        props.navigation.navigate(routeName)
    }

}

