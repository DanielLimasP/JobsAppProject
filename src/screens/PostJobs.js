import React, { useContext, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    BackHandler
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { UsuarioContext } from '../context/UsuarioContext'
import color from '../styles/colors'

import MyButton from '../components/MyButton'

export default function PostJobs(props) {
    //useBackButton(SignOff)
    //const [login, loginAction] = useContext(UsuarioContext)
    return (

        <View style={{ flex: 1 }}>
            <View style={{ margin: 10, marginTop: 30, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 42,
                        height: 42,
                        backgroundColor: color.SECONDARYCOLOR,
                        borderRadius: 50,
                    }}
                >
                    <Ionicons name='md-menu' size={32} color='white' />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 42,
                        height: 42,
                        backgroundColor: color.SECONDARYCOLOR,
                        borderRadius: 50,
                    }}
                >
                    <Ionicons name='ios-notifications' size={32} color='white' />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Jobs</Text>
            </View>

        </View>
    );



 

}


