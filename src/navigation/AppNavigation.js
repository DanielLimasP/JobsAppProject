import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import MainScreen from '../screens/MainScreen';

const AppNavigation = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigation);
