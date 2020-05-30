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
                onPress={() => ToastAndroid.show(item.name, ToastAndroid.SHORT)}>
                <Image style={styles.itemSize}
                    source={{ uri: item.description_img }}
                />
                <View style={styles.subrow}>
                    <Text style={styles.title}>
                        {item.name}
                    </Text>
                    <Text style={styles.amount}>
                        { "$" + item.amountPayment }
                    </Text>
                    <Text style={styles.description}>
                        {item.description}
                    </Text>

                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        const userID = this.props.id
        const data = {
            perpage: 50,
            page: 1,
            id: userID
        };
        fetch('https://9d1fedb2.ngrok.io/jobs/jobsbypage', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: responseJson.jobs,
                isLoading: false
            }, console.log(Object.keys(responseJson.jobs).length))
        })
        .then(data => {})
        .catch((error) => {});
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
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    subrow: { flex: 1, justifyContent: 'center', },
    title: {
        fontSize: 12,
        color: '#2C2C57',
        marginBottom: 15
    },
    amount: {
        fontSize: 8,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 8
    },
    loadingAnimation: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
