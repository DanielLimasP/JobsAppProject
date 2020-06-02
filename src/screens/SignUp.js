import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {
    CheckBox,
    SocialIcon
} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import RadioButton from '../components/RadioButton';
import MyTextInput from '../components/MyTextInput';
import color from '../styles/colors';
import { mainStyles, signUpStyles } from '../styles/styles';
import MyButton from '../components/MyButton';
import Snackbar from 'react-native-snackbar';


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
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [phone, setPhone] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    return (
        <View style={signUpStyles.container}>
            <View style={signUpStyles.header}>
                <Text style={signUpStyles.text_header}>Crea tu cuenta</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={signUpStyles.footer}
            >

                <ScrollView
                    keyboardDismissMode='on-drag'
                    keyboardShouldPersistTaps='always'
                    style={{ backgroundColor: color.WHITE }}>
                    <View style={mainStyles.container}>

                        <MyTextInput
                            placeholder="Nombre"
                            image='user'
                            value={name}
                            onChangeText={(newName) => {
                                setName(newName)
                                /** Bit of code for debuggin and testing and stuff
                                 Snackbar.show({
                                     text: newName,
                                     duration: Snackbar.LENGTH_LONG
                                 })
                                 * 
                                 */
                            }} />
                        <MyTextInput
                            placeholder="Apellido"
                            image='user'
                            value={lastname}
                            onChangeText={(newLastname) => setLastname(newLastname)}
                        />
                        <MyTextInput
                            placeholder="Correo"
                            keyboardType='email-address'
                            image='envelope'
                            value={email}
                            onChangeText={(newEmail) => setEmail(newEmail)}
                            autoCapitalize="none"
                        />
                        <MyTextInput
                            placeholder="Contraseña"
                            keyboardType={null}
                            value={password}
                            onChangeText={(newPassword) => setPassword(newPassword)}
                            image='lock'
                            secureTextEntry={!hidePassword}
                            autoCapitalize="none"
                        />
                        <MyTextInput
                            placeholder="Confirmar contraseña"
                            keyboardType={null}
                            onPress={() => setHidePassword(!hidePassword)}
                            image='lock' bolGone={true}
                            secureTextEntry={!hidePassword}
                            value={passwordConfirm}
                            onChangeText={(newPasswordConfirm) => setPasswordConfirm(newPasswordConfirm)}
                            autoCapitalize="none"
                        />
                        <MyTextInput
                            placeholder="Telefono"
                            keyboardType='number-pad'
                            image='user' value={phone}
                            onChangeText={(newPhone) => setPhone(newPhone)} />
                        <Text style={signUpStyles.texto}>FECHA DE NACIMIENTO:</Text>

                        <View style={signUpStyles.container3}>
                            <TextInput keyboardType='number-pad' style={signUpStyles.txtDate} placeholder="DD" value={day} onChangeText={(newDay) => setDay(newDay)}></TextInput>
                            <TextInput keyboardType='number-pad' style={signUpStyles.txtDate} placeholder="MM" value={month} onChangeText={(newMonth) => setMonth(newMonth)}></TextInput>
                            <TextInput keyboardType='number-pad' style={signUpStyles.txtDate} placeholder="AAAA" value={year} onChangeText={(newYear) => setYear(newYear)}></TextInput>
                        </View>

                        <Text style={signUpStyles.textoS}>SEXO:</Text>
                        <View style={signUpStyles.container3}>
                            <RadioButton PROP={PROP} />
                        </View>

                        <CheckBox
                            containerStyle={signUpStyles.checkbox}
                            textStyle={{ color: color.PRIMARYCOLOR }}
                            title='He leido y acepto los términos y condiciones'
                            checked={true}
                            checkedColor={color.SECONDARYCOLOR} />
                        <MyButton
                            titulo='Continuar'
                            onPress={() => {
                                // Aqui hacer un POST a la ruta de signup del usuario
                                let bday = +day + '-' + month + '-' + year
                                signupUserFetch(name, lastname, email, password, phone, bday).then((res) => {
                                    console.log(res)
                                    Snackbar.show({
                                        text: 'Usuario creado!',
                                        duration: Snackbar.LENGTH_LONG
                                    })
                                })
                                goToScreen('Login')
                            }
                            }
                        />
                        <View >
                            <View style={signUpStyles.containerSocial}>
                                <SocialIcon
                                    style={signUpStyles.buttonSocialIcon}
                                    title='Iniciar con Google'
                                    button
                                    type='google-plus-official' />
                            </View>
                            <TouchableOpacity onPress={() => goToScreen('Login')}>
                                <Text style={mainStyles.txtSecond}>¿Ya tienes una cuenta?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View >
    );

    function goToScreen(routeName) {
        props.navigation.navigate(routeName)
    }

    async function signupUserFetch(name, lastname, email, password, phone, birthdate) {
        var newUser = {
            username: name + ' ' + lastname,
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            phone: phone,
            birthdate: birthdate
        }
        //console.log(newUser)
        try {
            const response = await fetch('https://8bd0887c64ba.ngrok.io/auth/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: await JSON.stringify(newUser)
            });
            let res = await response.json();
            //console.log(res)
            return res
        } catch (error) {
            return null
        }
    }

}

