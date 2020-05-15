import React, {
  Component
}  from 'react';

import {
  View
} from 'react-native';

import LoginView from './screens/LoginViewScreen'
import SignIn from './components/SignIn'

export default class App extends Component<>{
  render(){
    return(
      <View>
        <SignIn/>
      </View>
    )
  }
}


