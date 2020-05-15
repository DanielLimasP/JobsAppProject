/*Pendiente inicio con cuenta Google
flex:1*/

import React, { Component } from 'react'
import { View, Text,TextInput,TouchableHighlight, StyleSheet } from 'react-native'

export default class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.textInicio}>INICIO DE SESIÓN</Text>
            <Text style={styles.texto}>CORREO ELECTRÓNICO:</Text>
           
            <View style={styles.container2}>
                <TextInput style={styles.textInput}></TextInput>
            </View>  

            <Text style={styles.texto}>CONTRASEÑA:</Text>

            <View style={styles.container2}>
                <TextInput style={styles.textInput}></TextInput>

                <TouchableHighlight style={styles.buttonContinuar}>
                    <Text style={styles.textButton}>CONTINUAR</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonRegistro}>
                    <Text style={styles.textButton}>NO TENGO CUENTA</Text>
                </TouchableHighlight>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      margin:10,
    },
    container2: {
        alignItems: 'center',
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
    buttonRegistro:{
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
    textButton:{
        color:'white',
        fontSize: 20,
    },
    textInicio:{
        fontSize:20,
        textAlign:'left',
        margin:10,
        color:'#51AADF',
    },
    textInput:{
        width:300,
        height:40,
        borderColor: 'gray',
        borderWidth: 1,
        margin:10,
    },
    texto:{
        fontSize:20,
        textAlign:'left',
        margin:10,
    },
  });
