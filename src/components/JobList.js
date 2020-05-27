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
                    <Text>
                        {item.author}
                    </Text>
                    <Text>
                        {item.key}
                    </Text>
                </View>
            </TouchableOpacity>
        )


    }


    renderSeparator = () => {
        return (
            <View style={styles.separator}>

            </View>
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
                        ItemSeparatorComponent={this.renderSeparator}
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
        width: 100,
        height: 100,
        margin: 5
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },

    subrow: { flex: 1, justifyContent: 'center', },
    title: {
        fontSize: 18,
        color: 'green',
        marginBottom: 15
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#AFDF99'
    },
    loadingAnimation: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})