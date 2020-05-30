import React, { Component, useContext } from "react";
import { UsuarioContext } from '../context/UsuarioContext'
import color from '../styles/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList, ScrollView, Text, TextInput, Button, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, ToastAndroid } from "react-native";
import { createParameter } from "typescript";
import { DatePicker, Picker } from "native-base";

export default class AddJob extends Component {

    constructor() {
        super()
        this.state = {
            name: 'No title',
            cat: 'Plumbing',
            startedDate: new Date(),
            finishedDate: new Date(),
            desc: '-',
            pago: 0,
            ubi: 'Sin dirección',
            maxWorkers: 1
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
        else if (field == 'name') {
            this.setState({
                name: text,
            })
        }
        else if (field == 'cat') {
            this.setState({
                cat: text,
            })
        }
        else if (field == 'startedDate') {
            this.setState({
                startedDate: text,
            })
        }
        else if (field == 'finishedDate') {
            this.setState({
                finishedDate: text,
            })
        }
        else if (field == 'pago') {
            try {
                this.setState({
                    pago: text.replace(/[- #*;,<>\{\}\[\]\\\/]/gi, '')
                });
            } catch (error) {}
        }
        else if (field == 'maxWorkers') {
            try {
                this.setState({
                    maxWorkers: text.replace(/[- #*;,<>\{\}\[\]\\\/]/gi, '')
                });
            } catch (error) {}
        }
        else if (field == 'ubi') {
            this.setState({
                ubi: text,
            })
        }
    }

    submit() {
        const userID = this.props.id
        let collection = {}
        collection.name = this.state.name,
        collection.cat = this.state.cat,
        collection.startedDate = this.state.startedDate,
        collection.finishedDate = this.state.finishedDate,
        collection.desc = this.state.desc,
        collection.pago = this.state.pago,
        collection.ubi = this.state.ubi,
        collection.maxWorkers = this.state.maxWorkers
        var name = collection.name.toString()
        var category = collection.cat.toString()
        var startedDate = collection.startedDate.toString()
        var dueDate = collection.finishedDate.toString()
        var description = collection.desc.toString()
        var address = collection.ubi.toString()
        var amountPayment = parseFloat(collection.pago, 10);
        var maxWorkers = parseInt(collection.maxWorkers, 10);
        console.log("This is user ID: " + userID)
        var dataObj = {
            "name": name,
            "startedDate": startedDate,
            "dueDate": dueDate,
            "description": description,
            "_id": userID,
            "amountPayment": amountPayment,
            "description_img": " ",
            "category": category,
            "address": address,
            "maxWorkers": maxWorkers
        }
        console.log(dataObj)
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
                <Text style={styles.jobTitle, {marginLeft: 10}}>Agregar Trabajo</Text>
                <ScrollView>
                    <TextInput style={styles.textInput}
                        placeholder={"Titulo"}
                        placeholderTextColor="f3f3f3"
                        onChangeText={(text) => this.updateValue(text, 'name')}
                    />
                    <Picker  style={{ marginLeft: 20, marginRight: 20, color: 'black' }}
                        note
                        mode="dropdown"
                        selectedValue={this.state.cat}
                        onValueChange={(value) => this.updateValue(value, 'cat')}
                    >
                        <Picker.Item label='Plomeria' value='Plumbing'/>
                        <Picker.Item label='Carpinteria' value='Carpentry'/>
                        <Picker.Item label='Jardineria' value='Gardening'/>
                        <Picker.Item label='Mensajero' value='Messenger'/>
                        <Picker.Item label='Limpieza' value='Cleaning'/>
                        <Picker.Item label='Computación' value='Comuting'/>
                        <Picker.Item label='Electronica' value='Electronics'/>
                        <Picker.Item label='Mecanica' value='Mechanic'/>
                        <Picker.Item label='Otra' value='Other'/>
                    </Picker>
                    <TextInput style={styles.textInput}
                        ref='desc'
                        placeholder={"Descripción"}
                        placeholderTextColor="f3f3f3"
                        onChangeText={(text) => this.updateValue(text, 'desc')}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Text>Selecciona</Text>
                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(2020, 4, 25)}
                            maximumDate={new Date(2050, 11, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Fecha de inicio"
                            textStyle={{ color: color.SECONDARYCOLOR }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={(text) => this.updateValue(text, 'startedDate')}
                            disabled={false}
                        />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text>Selecciona</Text>
                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(2020, 4, 25)}
                            maximumDate={new Date(2050, 11, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Fecha a terminar"
                            textStyle={{ color: color.SECONDARYCOLOR }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={(text) => this.updateValue(text, 'finishedDate')}
                            disabled={false}
                        />
                    </View>
                    <TextInput style={styles.textInput}
                        placeholder="Pago $$$"
                        placeholderTextColor="f3f3f3"
                        numeric
                        keyboardType={'numeric'}
                        onChangeText={(text) => this.updateValue(text, 'pago')}
                        value={this.state.pago}
                    />
                    <TextInput style={styles.textInput}
                        placeholder="Maximo de trabajadores"
                        placeholderTextColor="f3f3f3"
                        numeric
                        keyboardType={'numeric'}
                        onChangeText={(text) => this.updateValue(text, 'maxWorkers')}
                        value={this.state.maxWorkers}
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
                </ScrollView>
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
