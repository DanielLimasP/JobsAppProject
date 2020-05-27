import React from 'react'
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
import Snackbar from 'react-native-snackbar'
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import RadioButton from '../components/RadioButton';
import color from '../styles/colors';
import { mainStyles, signUpStyles, loginStyles } from '../styles/styles';
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

const SignUp = ({ navigation }) => {
    /*
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
        */

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',

        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    };

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    };

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    };
    
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }



    return (
        <View style={signUpStyles.container}>
            <StatusBar backgroundColor={color.PRIMARYCOLOR} barStyle="light-content" />
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
                    style={{ backgroundColor: color.WHITE }}
                >
                    <View style={loginStyles.action}>
                        <FontAwesome
                            name="user-o"
                            color={color.PRIMARYCOLOR}
                            size={24}
                        />
                        <TextInput
                            placeholder="Nombre"
                            style={signUpStyles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        //value={name}
                        //onChangeText={(newName) => { setName(newName) }}
                        /** Bit of code for debuggin and testing and stuff
                 Snackbar.show({
                     text: newName,
                     duration: Snackbar.LENGTH_LONG
                 })
                 * 
                 */
                        />
                    </View>
                    <View style={loginStyles.action}>
                        <FontAwesome
                            name="user-o"
                            color={color.PRIMARYCOLOR}
                            size={24}
                        />
                        <TextInput
                            placeholder="Apellido"
                            style={signUpStyles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        //value={lastname}
                        //onChangeText={(newLastname) => setLastname(newLastname)}
                        />
                    </View>
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
                            onChangeText={(val) => textInputChange(val)}
                        //value={email}
                        //onChangeText={(newEmail) => setEmail(newEmail)}
                        />
                    </View>
                    <View style={loginStyles.action}>
                        <Feather
                            name="lock"
                            color={color.PRIMARYCOLOR}
                            size={24}
                        />
                        <TextInput
                            placeholder="Contraseña"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={signUpStyles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        //value={password}
                        //onChangeText={(newPassword) => setPassword(newPassword)}

                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color={color.PRIMARYCOLOR}
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color={color.PRIMARYCOLOR}
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={loginStyles.action}>
                        <Feather
                            name="lock"
                            color={color.PRIMARYCOLOR}
                            size={24}
                        />
                        <TextInput
                            placeholder="Confirmar contraseña"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={signUpStyles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        //value={passwordConfirm}
                        //onChangeText={(newPasswordConfirm) => setPasswordConfirm(newPasswordConfirm)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color={color.PRIMARYCOLOR}
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color={color.PRIMARYCOLOR}
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={loginStyles.action}>
                        <FontAwesome
                            name="phone"
                            color={color.PRIMARYCOLOR}
                            size={24}
                        />
                        <TextInput
                            placeholder="Telefono"
                            style={signUpStyles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        //value={phone}
                        //onChangeText={(newPhone) => setPhone(newPhone)}
                        />
                    </View>
                    <View style={signUpStyles.container2}>
                        <Text style={signUpStyles.textoS}>FECHA DE NACIMIENTO:</Text>

                        <View style={signUpStyles.container3}>
                            <TextInput keyboardType='number-pad' style={signUpStyles.txtDate} placeholder="DD"
                            //value={day} onChangeText={(newDay) => setDay(newDay)}
                            >
                            </TextInput>
                            <TextInput keyboardType='number-pad' style={signUpStyles.txtDate} placeholder="MM"
                            //</View>value={month} onChangeText={(newMonth) => setMonth(newMonth)}
                            >
                            </TextInput>
                            <TextInput keyboardType='number-pad' style={signUpStyles.txtDate} placeholder="AAAA"
                            //value={year} onChangeText={(newYear) => setYear(newYear)}
                            >
                            </TextInput>
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
                                /*
                                // Aqui hacer un POST a la ruta de signup del usuario
                                let bday = +day + '-' + month + '-' + year
                                signupUserFetch(name, lastname, email, password, phone, bday).then((res) => {
                                    console.log(res)
                                    Snackbar.show({
                                        text: 'Usuario creado!',
                                        duration: Snackbar.LENGTH_LONG
                                    })
                                })
                                */
                                navigation.goBack()
                            }
                            }
                        />
                    </View>
                    <View >
                        <View style={signUpStyles.containerSocial}>
                            <SocialIcon
                                style={signUpStyles.buttonSocialIcon}
                                title='Iniciar con Google'
                                button
                                type='google-plus-official' />
                        </View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={mainStyles.txtSecond}>¿Ya tienes una cuenta?</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </Animatable.View>
        </View >
    );
    /*
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
            const response = await fetch('http://e44e675a.ngrok.io/auth/register', {
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
    */
};

export default SignUp;