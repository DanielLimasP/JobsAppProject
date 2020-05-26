import React, { Component } from "react";
import { FlatList, Text, View, StyleSheet, ActivityIndicator } from "react-native";


export default class JobList extends Component {
    state = {
        data: []
    };

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentWillMount() {
        return fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies
                })

            })

            .catch((error) => {
                console.log(error)

            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.item}>
                    <ActivityIndicator />
                </View>
            )
        }

        else {
            let movies = this.state.dataSource.map((val, key) => {
                return <View key={key} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text styles={styles.item}>{val.id}</Text>
                    <Text styles={styles.item}>{val.title}</Text>
                    <Text styles={styles.item}>{val.releaseYear}</Text>
                    
                </View>

                
                
            });

            
            

            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Content Loaded</Text>
                    {movies}
                </View>

            );
        }
    }
}


const styles = StyleSheet.create({
    txtVw: {
        textAlign: 'center',
        marginTop: 200,
        fontFamily: 'roboto-regular',
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    listcontainer: {
        flex: 1,

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 50,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    title: {
        fontSize: 32,
    },

})