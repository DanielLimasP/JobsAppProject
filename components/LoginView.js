/*
Pendiente importar imagen, no funciona componente ImgJob
import ImgJob from './ImgJob'
<ImgJob/>
*/

import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

export default (props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>Bienvenido a JaleJale</Text>
            <Text style={styles.jale}>¡La plataforma para hacer jalesitos sencillos!</Text>
        
            <TouchableHighlight style={styles.buttonStyle1}>
                <Text style={styles.textButton}>INICIAR SESIÓN</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle2}>
                <Text style={styles.textButton}>REGISTRO</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems:'center',
      margin:10,
    },    
    buttonStyle1:{
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
    buttonStyle2:{
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
        fontFamily:''
    },
    welcome:{
        fontSize:50,
        textAlign:'center',
        margin:10,
    },
    jale:{
        fontSize:15,
        textAlign:'center',
        margin:10,
    }
  });
