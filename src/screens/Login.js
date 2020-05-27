import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  TextInput,
  ScrollView
} from "react-native";
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { mainStyles, loginStyles, signUpStyles } from '../styles/styles'
import MyButton from '../components/MyButton'
import color from '../styles/colors'
import { AuthContext } from '../context/UsuarioContext'
import Users from '../context/users'

//Componente funcional
const Login = ({ navigation }) => {
  /*
    const [login, loginAction] = useContext(UsuarioContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidePassword, setHidePassword] = useState(false)
    */

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        isValidUser: false
      });
    }
  };

  const loginHandle = (userName, password) => {

    const foundUser = Users.filter(item => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
        { text: 'Okay' }
      ]);
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        { text: 'Okay' }
      ]);
      return;
    }
    signIn(foundUser);
  };

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
        <View style={loginStyles.action}>
          <FontAwesome
            name="user-o"
            color={color.PRIMARYCOLOR}
            size={24}
          />
          <TextInput
            placeholder="Email"
            style={signUpStyles.textInput}
            autoCapitalize="none"
            //image="user"
            //value={email}
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)
              //onChangeText={(email) => setEmail(email)
            }
          />
          {data.check_textInputChange ?
            <Animatable.View animation="bounceIn">
              <Feather
                name="check-circle"
                color="green"
                size={20}
              />
            </Animatable.View>
            : null}
        </View>

        <View style={loginStyles.action}>
          <Feather
            name="lock"
            color={color.PRIMARYCOLOR}
            size={24}
          />
          <TextInput
            placeholder="Contraseña"
            style={signUpStyles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onPress={() => setHidePassword(!hidePassword)}
            //value={password}
            //onChangeText={(password) => setPassword(password)
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ?
              <Feather
                name="eye-off"
                color="grey"
                size={20}
              />
              :
              <Feather
                name="eye"
                color="grey"
                size={20}
              />
            }
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={signUpStyles.errorMsg}>Password must be 4 characters long.</Text>
          </Animatable.View>
        }

        <MyButton
          titulo='Iniciar Sesión'
          //onPress={() => iniciarSesion()
          onPress={() => { loginHandle(data.username, data.password) }}
        />
        <MyButton
          trasparent={true}
          titulo='Registro'
          style={mainStyles.btnSecond}
          //onPress={() => goToScreen('SignUp')
          onPress={() => navigation.navigate('SignUp')}
        />

        <View >
          <TouchableOpacity onPress={() => navigation.navigate('RecoverPassword')}>
            <Text style={[mainStyles.txtSecond, { textDecorationLine: 'underline' }]}>
              Olvide mi contraseña
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  /*
  function iniciarSesion() {
    loginAction({
      type: 'sign', 
      data: {
        email,
        password
      }
    })
    //goToScreen('MainScreen')
  }

  function goToScreen(routeName) {
    props.navigation.navigate(routeName)
  }
*/
}

export default Login;