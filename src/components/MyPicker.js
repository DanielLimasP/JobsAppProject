import React, {Component} from 'react';
import { Picker } from "native-base";
import { View } from 'react-native';

export default class MyPicker extends Component {
    state = {
        category: 'Carpentry',
    };

    render(){
        return(
            <View>
                <Picker  style={{ marginLeft: 20, marginRight: 20, color: 'black' }}
                    note
                    mode="dropdown"
                    selectedValue={this.state.category}
                    onValueChange={(value) => this.setState({category: value})}
                >
                    <Picker.Item label='Carpinteria' value='Carpentry'/>
                    <Picker.Item label='Computación' value='Computing'/>
                    <Picker.Item label='Electronica' value='Electronics'/>
                    <Picker.Item label='Jardineria' value='Gardening'/>
                    <Picker.Item label='Limpieza' value='Cleaning'/>
                    <Picker.Item label='Mecanica' value='Mechanic'/>
                    <Picker.Item label='Mensajero' value='Messenger'/>
                    <Picker.Item label='Plomeria' value='Plumbing'/>
                    <Picker.Item label='Otra' value='Other'/>
                </Picker>
            </View>
        )
    }

}