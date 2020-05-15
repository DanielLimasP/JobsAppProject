import React, {
  Component
}  from 'react';

import {
  View
} from 'react-native';

import LoginView from './screens/LoginViewScreen'

export default class App extends Component<>{
  render(){
    return(
      <View>
        <LoginView/>
      </View>
    )
  }
}


