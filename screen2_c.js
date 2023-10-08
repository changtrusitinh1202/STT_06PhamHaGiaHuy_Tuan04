import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TextInput, Button, CheckBox} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather, Entypo ,AntDesign, FontAwesome   } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useState } from "react";

export default function screen2_c(){
    const [pass, setpass] = useState('');
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(false);
    const generatePassword = () => {
        const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialSymbols = "!@#$%^&*()_-+=<>?";
    
        let allowedCharacters = "";
        if (includeLowercase) {
          allowedCharacters += lowercaseLetters;
        }
        if (includeUppercase) {
          allowedCharacters += uppercaseLetters;
        }
        if (includeNumbers) {
          allowedCharacters += numbers;
        }
        if (includeSpecialSymbols) {
          allowedCharacters += specialSymbols;
        }
    
        let newPassword = "";
        if(allowedCharacters=="" ) alert("cần chọn tiêu chí xuất password");
        else{
            
            for (let i = 0; i < passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
                newPassword += allowedCharacters[randomIndex];
              }
             
              setpass(newPassword);
        }
        
      };


    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.top}>
                    <Text style={{fontSize:'25px', fontWeight: '700', color: '#FFFFFF'}}>
                        PASSWORD{'\n'}
                        GENERATOR
                    </Text>
                </View>

                <View style={styles.center}>
                    <TextInput value={pass} style={styles.textCenter} >

                    </TextInput>
                </View>

                <View style={styles.bottom}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Password length
                        </Text>
                        <TextInput  style={styles.passLength} keyboardType="number-pad" onChangeText={setPasswordLength}>

                        </TextInput>
                    </View>

                    <View style={styles.row} >
                        <Text style={styles.text} >
                            Include lowercase letters
                        </Text>
                        <CheckBox value={includeLowercase} onValueChange={setIncludeLowercase} >
                        
                        </CheckBox>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Include uppercase letters
                        </Text>
                        <CheckBox  value={includeUppercase} onValueChange={setIncludeUppercase}  >
                        
                        </CheckBox>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Include number
                        </Text>
                        <CheckBox  value={includeNumbers} onValueChange={setIncludeNumbers}  >
                        
                        </CheckBox>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Include special symbol
                        </Text>
                       <CheckBox  value={includeSpecialSymbols} onValueChange={setIncludeSpecialSymbols} >
                        
                       </CheckBox>
                    </View>

                    <TouchableOpacity style={styles.gui}   onPress={generatePassword}>
                        <Text style={{fontSize: '16px', fontWeight: '600', color: 'white'}}>
                            GENERATE PASSWORD
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#6633FF',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
       
    },

    main:{
        width: '322px',
        height: '605px',
        backgroundColor: '#333366',
        alignItems: 'center',
        borderRadius: '25px',
      
    },

    top:{
        height: '110px',
        justifyContent: 'flex-end',
    },

    center:{
        height: '75px',
        width: '90%',
        marginTop: '40px'
    },

    textCenter: {
        height: '55px',
        backgroundColor: 'white',
         paddingLeft: '10px'
    },

    bottom: {
        height: '60%',
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },

    passLength: {
        backgroundColor: 'white',
        width: '100px',
        height: '33px',
        paddingLeft: '10px'
    },
    text: {
        fontSize: '20px',
        fontWeight: '600',
        color: 'white',
        paddingLeft: '10px'
    },

     row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '2px'
     },

     gui:{
        width: '250px',
        borderRadius: '2px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6633FF',
        height: '45px',
        marginLeft: '20px',
    }
})