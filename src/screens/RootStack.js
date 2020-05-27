import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Splash';
import Login from './Login';
import SignUp from './SignUp';
import RecoverPassword from './RecoverPassword';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Splash" component={Splash}/>
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="SignUp" component={SignUp}/>
        <RootStack.Screen name="RecoverPassword" component={RecoverPassword}/>
    </RootStack.Navigator>
);

export default RootStackScreen;