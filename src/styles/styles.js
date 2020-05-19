import {StyleSheet} from 'react-native';
import color from './colors';

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

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({
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
