import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TextInput, Button, CheckBox} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather, Entypo ,AntDesign, FontAwesome   } from '@expo/vector-icons';

const image = {uri: 'https://shop.congnghesongtin.com/datafiles/27121/upload/thumb_images/Phu%20kien%20cong%20nghe/Sandisk-USB-Sandisk-CZ430-mini-3_1-16GB-cong-nghe-song-tin%20%281%29.png'};

    var arrayFeedBack = ['Tệ', 'Không hài lòng', 'Bình thường', 'Hài lòng', 'Cực kỳ hài lòng']
    

export default function screen2_b(){
    const [rating, setRating] = useState(null)
   
      
    return(
        
        <View style={styles.container} >
            <View style={styles.top}>
                <ImageBackground
                    source={image}
                    style={styles.img}
                ></ImageBackground>
                <Text style={{fontSize: '17.5px', fontWeight: '700', textAlign: 'left', paddingTop: '7px'}}>USB Bluetooth Music Receiver HJX0-001- Biến loa thường thành loa bluetooth</Text>
            </View>

            <View style={styles.center}>
                <View style={styles.center_1}>
                    <View>
                        <Text style={{fontWeight: '700', fontSize: '20px', textAlign: 'center', marginBottom: '20px'} }>{arrayFeedBack[rating-1]}</Text>
                    </View>
                    <View style={styles.start}>                     
                        {[...Array(5)].map((star, index) => {
                            const currentRate = index + 1; 
                            return(
                                <Entypo name="star" size={42} color={currentRate <= rating ? '#FFCC00' : 'gray'} onPress={() => setRating(currentRate)}  />
                               
                            )
                          
                        })
                        
                        }
                    </View>
                </View>
                <View style={styles.center_2}>
                    <TouchableOpacity style={styles.addImage} onPress={() => thongBao()}>
                        <Entypo name="camera" size={50} color="black" />
                        <Text style={{fontSize: '20px', fontWeight: '700',marginLeft: '15px'}} onPress={() => alert('Chọn ảnh')}> 
                            Thêm hình ảnh
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={7}
                        placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
                        placeholderTextColor={'#CCCCCC'}
                        style={{borderWidth: 1, fontWeight: '500',borderRadius: '5px',borderColor: '#CCCCCC', fontSize: '21px', paddingLeft: '15px', paddingTop: '10px', marginTop: '20px'}}
                        >
                      
                    </TextInput>
                </View>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.gui}>
                    <Text style={{fontSize: '23px', fontWeight: '600', color: 'white'}}>
                        Gửi
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    top:{
        height:'15%',
        flexDirection: 'row',
        marginTop: '10px',
        marginBottom: '30px'
    },

    img:{
        width: '97px',
        height: '97px',

    },

    center:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '71%',
        width: '100%'
    },

    start:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '330px',
        marginBottom: '30px'
    },
    

    addImage:{
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: '5px',
        width: '330px',
        flexDirection: 'row',
        height: '75px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    bottom:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    gui:{
        width: '330px',
        borderRadius: '5px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003399',
        height: '45px'
    }
})

