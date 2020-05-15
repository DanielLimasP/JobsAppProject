import React, {
  Component
}  from 'react';

import {
  View
} from 'react-native';

import LoginView from './screens/LoginViewScreen'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

export default class App extends Component<>{
  render(){
    return(
      <View>
        <SignUp/>
      </View>
    )
  }
}


