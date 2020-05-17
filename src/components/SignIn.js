/*Pendiente inicio con cuenta Google
Tipo de campo (correo y contraseña)
*/

import React, { Component } from 'react'
import { View, Text,TextInput,TouchableHighlight, StyleSheet } from 'react-native'

export default class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.textInicio}>INICIO DE SESIÓN</Text>
           
            <TextInput style={styles.textInput} placeholder="Correo electrónico"></TextInput>

            <TextInput style={styles.textInput} placeholder="Contraseña"></TextInput>

            <View style={styles.container2}>
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
      justifyContent: 'flex-start',
      margin:10,
      flex:1,
      alignItems:'stretch'
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
        width:350,
        height:45,
        borderColor: 'gray',
        borderWidth: 1,
        margin:10,
        fontSize: 20,
    },
  });
