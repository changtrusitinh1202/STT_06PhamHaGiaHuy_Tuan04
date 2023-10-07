import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TextInput, Button, CheckBox} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather, Entypo ,AntDesign, FontAwesome   } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useState } from "react";

const image = {uri: 'https://salt.tikicdn.com/cache/w1200/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg'}

export default function screenTiki_Ok(){
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                
            </View>    

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
    img:{
        width: '39px',
        height: '30px'
    }
})