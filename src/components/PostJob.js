/*Pendiente iconos*/

import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableHighlight style={styles.btnProfile}>
            <Text style={styles.textButton}>C</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btnNot}>
            <Text style={styles.textButton}>N</Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.texto}>Publicar Trabajo</Text>

        <TextInput style={styles.textInput} placeholder="Descripción" />
        <TextInput style={styles.textInput} placeholder="Pago $$$" />
        <TextInput style={styles.textInput} placeholder="Ubicación" />

        <Text style={styles.texto}>Mis publicaciones</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'column',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnProfile: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    width: 40,
    height: 40,
  },
  btnNot: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    width: 40,
    height: 40,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
  },
  textInput: {
    width: 350,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
  },
  texto: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color: '#273A5E',
  },
});
