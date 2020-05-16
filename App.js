import React, {
  Component
}  from 'react';

import {
  View
} from 'react-native';

import LoginView from './screens/LoginViewScreen'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Map from './components/Map'

export default class App extends Component<>{
  render(){
    return(
      <View>
        <Map/>
      </View>
    )
  }
}


