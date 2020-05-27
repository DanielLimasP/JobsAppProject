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
        textAlign: 'center'
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
    logo: {
        paddingTop: 80,
        marginBottom:30,
        alignItems: 'center',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: color.LIGHTSECONDARYCOLOR,
        paddingBottom: 5,
        marginLeft: 20,
        marginRight: 20
    },
})
//Estilos para SignUp Screen
const signUpStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.PRIMARYCOLOR
    },
    container2: {
        alignItems:'center',
    },   
    container3: {
        flexDirection:'row',
        alignItems:'center',
    },   
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        textAlign: 'center'
    },
    text_header: {
        color: color.WHITE,
        fontWeight: 'bold',
        fontSize: 30
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30
    }, 
    txtDate:{
        width:90,
        height:45,
        borderColor: 'gray',
        borderWidth: 1,
        margin:10,
        fontSize:20,
    },
     textoS:{
        fontSize:18,
        color: color.PRIMARYCOLOR,
        fontFamily:"roboto-regular",
        textAlign:'left',
        fontWeight: '700',
    },
    checkBox:{
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
        backgroundColor: color.WHITE
    },
    containerSocial: {
        paddingTop:10,
        alignItems: "center",
        marginBottom: 10
    },
    buttonSocialIcon:{
        marginBottom: 10,
        width: 250,
        height: 60,
        alignItems: 'center',
        borderRadius: 12 
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: color.PRIMARYCOLOR,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },


})

export { mainStyles, splashStyles, loginStyles, signUpStyles }
