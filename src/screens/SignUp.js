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
import Snackbar from 'react-native-snackbar'



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
    const [password, setPassword] =useState('')  
    const [passwordConfirm, setPasswordConfirm] = useState('') 
    const [phone, setPhone] = useState('') 
    const [day, setDay] = useState('') 
    const [month, setMonth] = useState('')  
    const [year, setYear] = useState('')

    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.PRIMARYCOLOR} translucent={true} />
            <ToolBar titulo='Registro'
                onPressLeft={() => goToScreen('Login')}
                iconLeft={require('../assets/images/back.png')} />
            <View style={mainStyles.container}>
                <Text style={mainStyles.titleText}>Crea tu cuenta</Text>

                <MyTextInput placeholder="Nombre" image='user' value={name} onChangeText={(newName) => {
                    setName(newName)
                    /** Bit of code for debuggin and testing and stuff
                     Snackbar.show({
                         text: newName,
                         duration: Snackbar.LENGTH_LONG
                     })
                     * 
                     */
                }}/>
                <MyTextInput placeholder="Apellido" image='user' value={lastname} onChangeText={(newLastname) => setLastname(newLastname)}/>
                <MyTextInput placeholder="Correo" keyboardType='email-address' image='envelope' value={email} onChangeText={(newEmail) => setEmail(newEmail)} />
                <MyTextInput placeholder="Contraseña" keyboardType={null}
                    value={password} onChangeText={(newPassword) => setPassword(newPassword)}
                    image='lock' secureTextEntry={hidePassword}
                />
                <MyTextInput placeholder="Confirmar contraseña" keyboardType={null}
                    onPress={() => setHidePassword(!hidePassword)} image='lock' bolGone={true} secureTextEntry={hidePassword}
                    value={passwordConfirm} onChangeText={(newPasswordConfirm) =>  setPasswordConfirm(newPasswordConfirm)}
                />
                <MyTextInput placeholder="Telefono" keyboardType='number-pad' image='user' value={phone} onChangeText={(newPhone) => setPhone(newPhone)} />
                <Text style={signUp.texto}>FECHA DE NACIMIENTO:</Text>

                <View style={signUp.container3}>
                    <TextInput keyboardType='number-pad' style={signUp.txtDate} placeholder="DD" value={day} onChangeText={(newDay) => setDay(newDay)}></TextInput>
                    <TextInput keyboardType='number-pad' style={signUp.txtDate} placeholder="MM" value={month} onChangeText={(newMonth) => setMonth(newMonth)}></TextInput>
                    <TextInput keyboardType='number-pad' style={signUp.txtDate} placeholder="AAAA" value={year} onChangeText={(newYear) => setYear(newYear)}></TextInput>
                </View>

                <Text style={signUp.textoS}>SEXO:</Text>
                <View style={signUp.container3}>
                    <RadioButton PROP={PROP} />
                </View>
                

                <CheckBox
                    containerStyle={signUp.checkbox}
                    textStyle={{ color: color.PRIMARYCOLOR }}
                    title='He leido y acepto los términos y condiciones'
                    checked={true}
                    checkedColor={color.SECONDARYCOLOR} />
                <MyButton
                    titulo='Continuar'
                    onPress={() => {
                        // Aqui hacer un POST a la ruta de signup del usuario
                        let bday = +day+'-'+month+'-'+year
                        signupUserFetch(name, lastname, email, password, phone, bday).then((res) => {
                            console.log(res)
                            Snackbar.show({
                                text: 'Usuario creado!',
                                duration: Snackbar.LENGTH_LONG
                            })
                        })
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
                    <TouchableOpacity onPress={() => goToScreen('Login')}>
                        <Text style={mainStyles.txtSecond}>¿Ya tienes una cuenta?</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>
    )

    function goToScreen(routeName) {
        props.navigation.navigate(routeName)
    }

    async function signupUserFetch(name, lastname, email, password, phone, birthdate){
        var newUser = {
            username: name+' '+lastname,
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            phone: phone,
            birthdate: birthdate
        }
        //console.log(newUser)
        try {
            const response = await fetch('https://9d1fedb2.ngrok.io/auth/register', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: await JSON.stringify(newUser)
            });
            let res = await response.json();
            //console.log(res)
              return  res
          } catch (error) {
            return null
          }
    }

}

