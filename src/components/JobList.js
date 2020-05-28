import React, { Component } from "react";
import { FlatList, Text, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, ToastAndroid } from "react-native";
import { isThisTypeNode } from "typescript";


export default class JobList extends Component {

    constructor() {
        super()
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }

    renderItem = (item) => {

        return (
            <TouchableOpacity style={styles.row}
                onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
                <Image style={styles.itemSize}
                    source={{ uri: item.image }}
                />
                <View style={styles.subrow}>
                    <Text style={styles.title}>
                        {item.book_title}
                    </Text>
                    <Text style={styles.author}>
                        {item.author}
                    </Text>

                </View>
            </TouchableOpacity>
        )


    }


  

    componentDidMount() {
        const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indet=1'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.book_array,
                    isLoading: false

                }
                    , console.log(Object.keys(responseJson.book_array).length))
            })
            .catch((error) => {
                console.log(error)
            });

    }

    render() {
        return (
            this.state.isLoading
                ?
                <View style={styles.loadingAnimation}>
                    <ActivityIndicator size="large" color="#330066" animating />
                </View>
                :
                <View style={styles.container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item, index }) => this.renderItem(item, index)}
                        keyExtractor={(item, index) => index.toString()}

                    />
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