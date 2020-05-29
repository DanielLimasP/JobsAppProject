import React, { Component } from "react";
import color from '../styles/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList, Text, TextInput, Button, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, ToastAndroid } from "react-native";
import { createParameter } from "typescript";

export default class JobList extends Component {

    constructor() {
        super()
        this.state = {
            desc: '',
            pago: '',
            ubi: ''
        }
    }

    onFocus() {
        this.setState({
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#f2f2f2',
            marginTop: 3,
            marginBottom: 3,
            marginLeft: 55,
            marginRight: 55,
            shadowColor: "#CCCCCC",
            shadowOffset: { width: 0, height: 2, },
            shadowOpacity: 0.99,
            shadowRadius: 1.84,
            elevation: 1.5,
        })
    }

    updateValue(text, field) {
        if (field == 'desc') {
            this.setState({
                desc: text,
            })
        }
        else if (field == 'pago') {
            try {
                this.setState({
                    pago: text.replace(/[- #*;,<>\{\}\[\]\\\/]/gi, '')
                });
            } catch (error) {

            }

        }
        else if (field == 'ubi') {
            this.setState({
                ubi: text,
            })
        }
    }

    submit() {
        let collection = {}
        collection.desc = this.state.desc,
            collection.pago = this.state.pago,
            collection.ubi = this.state.ubi
        var name = collection.desc.toString()
        var description = collection.desc.toString()
        var address = collection.ubi.toString()
        var amountPayment = parseInt(collection.pago, 10);
        console.warn(collection)
        var dataObj = {
            "name": name,
            "startedDate": "Thu Apr 02 2020 11:25:22",
            "dueDate": "Thu Apr 02 2020 11:25:22",
            "description": description,
            "_id": "5e73d5a01e944f14dcda02b2",
            "amountPayment": amountPayment,
            "description_img": " ",
            "category": "Cleaning",
            "address": address,
            "maxWorkers": 2
        }
        fetch('http://9d1fedb2.ngrok.io/jobs/addjob', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj),
        })
        .then(response => response.json())
        .then(dataObj => {})
        .catch((error) => {});
    }

    render() {
        return (
            this.state.isLoading
            ?
            <View style={styles.loadingAnimation}/>
            :
            <View style={styles.container}>
                <TextInput
                    ref='desc'
                    placeholder={"Descripción"}
                    placeholderTextColor="f3f3f3"
                    onChangeText={(text) => this.updateValue(text, 'desc')}
                    style={styles.textInput}
                />
                <TextInput style={styles.textInput}
                    placeholder="Pago $$$"
                    placeholderTextColor="f3f3f3"
                    numeric
                    keyboardType={'numeric'}
                    onChangeText={(text) => this.updateValue(text, 'pago')}
                    value={this.state.pago}
                />
                <TextInput style={styles.textInput}
                    placeholder="Ubicación"
                    placeholderTextColor="f3f3f3"
                    onChangeText={(text) => this.updateValue(text, 'ubi')}
                />
                <View style={ {alignItems:'center'} }>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.submit()}
                    >
                        <Text style={styles.textButton}>Publicar</Text>
                        <Ionicons name='md-checkmark-circle-outline' size={32} color='white'/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    itemSize: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,

    },
    row: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 3,
        marginBottom: 20,
        marginLeft: 55,
        marginRight: 55,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    textInput: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 20,
        marginRight: 20,
        shadowColor: "#CCCCCC",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.99,
        shadowRadius: 1.84,
        elevation: 1.5,
    },

    button: {
        margin: 5,
        width: 250,
        height: 70,
        backgroundColor: color.SECONDARYCOLOR,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },

    textButton: {
        textAlignVertical: "center",
        textAlign: 'center', // <-- the magic
        fontSize: 15,
        color: 'white',

    },

    subrow: { flex: 1, justifyContent: 'center', },
    title: {
        fontSize: 10,
        color: '#2C2C57',
        marginBottom: 15
    },
    author: {
        fontSize: 6
    },

    loadingAnimation: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
