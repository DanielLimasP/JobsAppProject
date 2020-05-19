import {StyleSheet} from 'react-native';
import color from './colors';

//Estilos principales
const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.WHITE
    },

    conteinerCenter : {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25
    },

    titleText : {
        fontSize : 28,
        marginTop: 20,
        alignItems: 'center',
        color: color.PRIMARYCOLOR,
        fontFamily: "roboto-regular"
    },

    btnMain: {
        width: 280,
        marginTop:30,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: color.SECONDARYCOLOR,
        borderRadius: 12
    },

    btnSecond: {
        backgroundColor: color.PRIMARYCOLOR,
        width: 280,
        alignItems: 'center',
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 12
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
        fontFamily: 'Roboto-regular',
    },

    txtSecond: {
        color: color.LIGHTPRIMARYCOLOR,
        fontSize: 14,
        fontFamily: 'Roboto-regular',
    }

})


//Estilos para SplashScreen
const splashStyles = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.WHITE,
  },
  txtWelcome: {
    top: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 128,
    width: 316,
    fontSize: 48,
    textAlign: 'center',
    left: 6,
  },
  txtSlogan: {
    top: 127,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 44,
    width: 327,
    textAlign: 'center',
    fontSize: 16,
    left: 0,
  },
  txtWelcomeStack: {
    width: 327,
    height: 171,
    marginTop: 20,
    marginLeft: 16,
  },
});

//Estilos para Login Screen
const loginStyles = StyleSheet.create({
<<<<<<< HEAD
    logo: {
        paddingTop: 80,
        marginBottom:30,
        alignItems: 'center',
    }
})
//Estilos para SignUp Screen
const signUp = StyleSheet.create({

    container3: {
        flexDirection:'row',
        alignItems:'center',

    },    
    buttonContinuar:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: '#51AADF',
        borderColor: '#51AADF',
        borderRadius: 8,
        marginTop:10,
        marginBottom:10,
        borderWidth:1,
        width:350,
        height:40,
    },
    buttonIniciar:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: '#273A5E',
        borderColor: '#273A5E',
        borderRadius: 8,
        marginTop:10,
        marginBottom:10,
        borderWidth:1,
        width:350,
        height:40,
    }, 
    textInicio:{
        fontSize:20,
        textAlign:'left',
        margin:10,
        color:'#51AADF',
    },
    textInput:{
        width:350,
        height:45,
        borderColor: 'gray',
        borderWidth: 1,
        margin:10,
        fontSize:20,
    },
    txtDate:{
        width:90,
        height:45,
        borderColor: 'gray',
        borderWidth: 1,
        margin:10,
        fontSize:20,
    },
    texto:{
        fontSize:20,
        textAlign:'left',
        margin:10,
        fontWeight: '700',
    },



    checkBox:{
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
        backgroundColor: color.WHITE
    },
    containerSocial: {
        paddingTop:30,
        alignItems: "center",
        marginBottom: 10
    },
    buttonSocialIcon:{
        marginBottom: 10,
        width: 250,
        height: 60,
        alignItems: 'center',
        borderRadius: 12 
    }

})

export { mainStyles, splashStyles, loginStyles, signUp }
=======
  container: {
    flex: 1,
    alignItems: 'center',
  },

  logo: {
    paddingTop: 80,
    alignItems: 'center',
  },

  btnMain: {
    width: 280,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: color.SECONDARYCOLOR,
    borderRadius: 12,
  },

  btnRegistro: {
    backgroundColor: color.PRIMARYCOLOR,
    width: 280,
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 12,
  },

  btntxt: {
    textAlign: 'center',
    fontSize: 17,
    color: color.WHITE,
    paddingVertical: 15,
    fontFamily: 'Roboto-regular',
  },

  txtTransparent: {
    color: color.LIGHTPRIMARYCOLOR,
    fontSize: 14,
    fontFamily: 'Roboto-regular',
  },
});

export {loginStyles, splashStyles};
>>>>>>> b98b3ab8ac2c006d02d13e621636376cee12adc6
