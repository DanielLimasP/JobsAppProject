import React from "react";
import { 
  Text,
  View,
  TouchableOpacity,
  Image
}from "react-native";
import color from '../styles/colors'

export default function ToolBar(props){
    return(
        <View style={[props.style, { height: 64, marginTop: 30,  backgroundColor: color.PRIMARYCOLOR}]}>
            {props.titulo &&
                <Text style={{fontFamily: 'roboto-regular', marginTop: 12, textAlign: "center", fontSize: 25, color: color.WHITE}}>
                    {props.titulo}
                </Text>
            }
            {props.iconLeft &&
            <TouchableOpacity style={{position: 'absolute', left:20, top: 15}} onPress={props.onPressLeft}>
                <Image style={{tintColor:color.WHITE, width:30, height:30}} source={props.iconLeft}></Image>
            </TouchableOpacity>

            }

        </View>

    )
}