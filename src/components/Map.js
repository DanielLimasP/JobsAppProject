/*Pendiente botón flotante y mapa
Iconos*/

import React, { Component } from 'react'
import { View,Text,TextInput,TouchableHighlight,StyleSheet } from 'react-native'

export default class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.btnProfile}>
                <Text style={styles.textButton}>C</Text>
         </TouchableHighlight>

         <TextInput style={styles.textInput} placeholder="Búsquedad"></TextInput>

         <TouchableHighlight style={styles.btnNot}>
                <Text style={styles.textButton}>N</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      margin:10,
      alignItems:'center',
      flexDirection:'row',
      justifyContent: 'space-between'
    },    
    btnProfile:{
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 8,
        marginTop:10,
        marginBottom:10,
        borderWidth:1,
        width:40,
        height:40,
    },
    btnNot:{
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 8,
        marginTop:10,
        marginBottom:10,
        borderWidth:1,
        width:40,
        height:40,
    }, 
    textButton:{
        color:'white',
        fontSize: 20,
    },
    textInput:{
        width:250,
        height:45,
        borderColor: 'gray',
        borderWidth: 1,
        margin:10,
        fontSize:20,
    },
  });