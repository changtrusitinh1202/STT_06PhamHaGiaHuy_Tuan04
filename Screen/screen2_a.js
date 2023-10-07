import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TextInput, Button, CheckBox} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather, Entypo ,AntDesign, FontAwesome   } from '@expo/vector-icons';
const image = { uri: "https://images.unsplash.com/photo-1618576980905-8b704806a39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwZ3JhZGllbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"};

export default function screen2_a(){
    const userName = 'huydz1202'
    const passWord = 'giahuy2203.'
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    function checkLogin(user, pass){
        if(user == userName && passWord == pass)
            alert('ok')
        else
            alert('con ket')
    }

    function viewPassword(){
        setShowPassword(!showPassword)
    }
    return(
        <View style={styles.container}>
            <ImageBackground 
                style={styles.gradient} 
                source={image}>
                
                <View style={styles.top}>
                    
                    <Text style={{fontSize: '28px', fontWeight: '700', marginLeft: '20px'}}>
                        LOGIN
                    </Text>
                </View>
                    
                <View style={styles.center}>
                    <FontAwesome name="user" size={30} color="black" style={{position: 'absolute', left: '20px', top: '10px'}} />
                    <TextInput placeholder="Name" style={styles.sameInput} onChangeText={setName}>
                        
                    </TextInput>
                    <FontAwesome name="lock" size={30} color="black" style={{position: 'absolute', left: '20px', top: '80px'}} />
                    <TextInput id="pass" placeholder="Password" secureTextEntry={!showPassword} style={styles.sameInput} >
                            
                    </TextInput>
                    <AntDesign name="eye" size={28} color="black" style={{position: 'absolute', right: '20px', top: '80px'}} onPress={() => viewPassword()}/>
                    <Text>{name}</Text>
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => checkLogin(name, password)}>
                            <Text style={styles.login}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.create}>
                            CREATE ACCOUNT
                        </Text>
                </View>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    gradient:{
        width: '100%',
        height: '100%'
    },

    top:{
        height:'30%',
        justifyContent: 'center'
    },

    center:{
        height: '30%',
        alignItems: 'center',
    },

    sameInput:{
        borderWidth: 1.5,
        borderColor: 'white',
        width: '95%',
        height: '50px',
        paddingLeft: '40px',
        fontWeight: '500',
        marginBottom: '20px'
    },
    bottom:{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        height: '25%',
        marginTop: '-30px'
    },

    loginBtn:{
        width: '95%',
        backgroundColor: 'black',
        height: '45px',
        
    },

    login:{      
        textAlign:'center',     
        color: 'white',          
        fontWeight: '500',
        fontSize: '20px',   
        lineHeight: '45px'
    },

    create:{
        fontSize: '20px',
        fontWeight: '700'
    }
});