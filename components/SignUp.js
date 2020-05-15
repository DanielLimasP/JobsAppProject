/*Pendiente inicio con cuenta Google
flex:1
Tipo de campo (correo y fecha)
¿campo contraseña?
RadioButton, eliminar texto para control "selected"
*/

import React, { Component } from 'react'
import { View,Text,TextInput,TouchableHighlight,StyleSheet } from 'react-native'
import RadioButton from './RadioButton';

const PROP = [
	{
		key: 'hombre',
		text: 'Hombre',
	},
	{
		key: 'mujer',
		text: 'Mujer',
	},
];

export default class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.textInicio}>REGISTRO</Text>

            <Text style={styles.texto}>NOMBRE:</Text>
            <View style={styles.container2}>
                <TextInput style={styles.textInput}></TextInput>
            </View>  

            <Text style={styles.texto}>APELLIDO PATERNO:</Text>
            <View style={styles.container2}>
                <TextInput style={styles.textInput}></TextInput>
            </View> 

            <Text style={styles.texto}>APELLIDO MATERNO:</Text>
            <View style={styles.container2}>
                <TextInput style={styles.textInput}></TextInput>
            </View> 

            <Text style={styles.texto}>CORREO:</Text>
            <View style={styles.container2}>
                <TextInput style={styles.textInput}></TextInput>
            </View> 

            <Text style={styles.texto}>SEXO:</Text>
            <View style={styles.container3}>
                <RadioButton PROP={PROP} />
            </View>
            <Text style={styles.texto}>FECHA DE NACIMIENTO:</Text>

            <View style={styles.container3}>
                <TextInput style={styles.txtDate} value={'DD'}></TextInput>
                <TextInput style={styles.txtDate} value={'MM'}></TextInput>
                <TextInput style={styles.txtDate} value={'AAAA'}></TextInput>
            </View> 
            <View style={styles.container2}>
                <TouchableHighlight style={styles.buttonContinuar}>
                    <Text style={styles.textButton}>CONTINUAR</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonIniciar}>
                    <Text style={styles.textButton}>YA TENGO CUENTA</Text>
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
    container3: {
        flexDirection:'row',
        alignItems:'center',

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
    buttonIniciar:{
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
        fontSize:20,
    },
    txtDate:{
        width:80,
        height:40,
        borderColor: 'gray',
        borderWidth: 1,
        margin:10,
        fontSize:20,
    },
    texto:{
        fontSize:20,
        textAlign:'left',
        margin:10,
        fontWeight: '700',
    },
  });
