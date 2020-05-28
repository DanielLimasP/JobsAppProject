import React, { Component } from "react";
import { FlatList, Text, TextInput, Button, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, ToastAndroid } from "react-native";





export default class JobList extends Component {

    constructor() {
        super()
        this.state = {
            desc: '',
            pago: '',
            ubi: ''
        }
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
        console.warn(collection)
        var dataObj = {
            "name":"Trabajo de Dino",
            "publishDate": "Thu Apr 02 2020 11:25:22",
            "startedDate":"Thu Apr 02 2020 11:25:22",
            "finishedDate":"Thu Apr 02 2020 11:25:22",
            "dueDate":"Thu Apr 02 2020 11:25:22",
            "isActive": true,
            "workers": [
                {
                    "_id":"5ebc42702b942e51701d1f9c",
                    "rate":5
                }
            ],
            "description": "Lorem ipsum",
            "employer": [
                {
                    "_id":"5ebb514e4a8b0424d57c3651",
                    "rate":5
                }
            ],
            "amountPayment": 1500,
            "description_img": require("/home/dino/reactjobs/JobsAppProject/src/assets/images/back.png"),
            "category": "Jardineria",
            "point": {
                "lat": 28.609116,
                "lng": -106.0640969
            },
            "maxWorkers": 2,
            "done": false
        }
        JSON.stringify(dataObj)
        fetch('https://9d1fedb2.ngrok.io/jobs/addjob', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: dataObj,

        })
            .then(response => response.json())
            .then(dataObj => {
                console.log('Success:', dataObj);
            })
            .catch((error) => {
                console.error('Error:', error);
                console.log(dataObj)
            });
    }







    render() {

        return (


            this.state.isLoading
                ?
                <View style={styles.loadingAnimation}>

                </View>
                :
                <View style={styles.container}>
                    <TextInput style={styles.textInput}
                        ref='desc'
                        placeholder={"Descripción"}
                        placeholderTextColor="f3f3f3"
                        onChangeText={(text) => this.updateValue(text, 'desc')}

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


                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.submit()}

                    >
                        <Text style={styles.textButton}>Publicar</Text>

                    </TouchableOpacity>


                </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1.5,

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
    },

    button: {
        flex: 1.1,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#51aadf',
        marginTop: 3,
        marginBottom: 20,
        marginLeft: 55,
        marginRight: 55,




    },

    textButton: {
        flex: 1,
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