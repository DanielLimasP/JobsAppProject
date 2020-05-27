import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ReactMap from '../components/ReactMap'
import color from '../styles/colors'

export default function PostJobs(props) {

    return (
        <View style={{ flex: 1 }}>
            <ReactMap />
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

        </View>
    );
}

