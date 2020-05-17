import React, { Component } from "react";
import { View, StatusBar, Text } from "react-native";
import * as Animatable from 'react-native-animatable'
import { splashStyles} from "../styles/styles"

export default class Login extends Component{
    //Metodo para saltar de la pantalla Splash a Login
    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    }

    componentDidMount(){
        setTimeout(()=>{
            this.goToScreen('Login')
        }, 2500, this)
    }

  render(){
    return(
        <View style={splashStyles.image}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)'/>
            <Animatable.Image 
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                style={{
                    width: 200,
                    height: 200,
                    margin: 50,
                }}
                source={require('../assets/images/logo.png')}
            />
            <View style={splashStyles.txtWelcomeStack}>
                <Text style={splashStyles.txtWelcome}>Bienvenido a JaleJale</Text>
                <Text style={splashStyles.txtSlogan}>
                    ¡La plataforma para hacer jalesitos sencillos!
                </Text>
            </View>
        </View>
        )
    }
}