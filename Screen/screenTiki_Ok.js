import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TextInput, Button, CheckBox} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather, Entypo ,AntDesign, FontAwesome   } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useState, useEffect } from "react";

const image = {uri: 'https://salt.tikicdn.com/cache/w1200/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg'}

export default function screenTiki_Ok(){
     const [soLuong, setSoLuong] = useState(1);
    function capNhatSoLuong(){
        return soLuong < 2 ? setSoLuong(1) : setSoLuong(soLuong -1)
    }

    const[Money,setMoney]= useState(0);
    useEffect(()=>{
        setMoney(soLuong*141800) 
    },[soLuong])
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.top_1}>
                    <View>
                        <ImageBackground
                        source={image}
                        style={styles.hinh}>
                        
                        </ImageBackground>
                    </View> 
                    <View style={styles.top_1_2}> 
                        <Text style={{fontSize: '13px', fontWeight: '700'}}>Nguyên hàm tích phân ứng dụng</Text>
                        <Text style={{fontSize: '13px', fontWeight: '700'}}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={{fontSize: '17px', fontWeight: '700', color: '#EE0000'}}>141.800 đ</Text>
                        <Text style={{textDecorationLine: 'line-through', color: 'gray'}}>141.800 đ</Text>
                        <View style={styles.top_1_1_2}>
                            <TouchableOpacity style={{backgroundColor: 'gray', width: '20px', height: '20px', justifyContent: 'center'}}  onPress={() => capNhatSoLuong()}>
                                <Text style={{justifyContent: 'center', textAlign: 'center'}}>-</Text>
                            </TouchableOpacity>
                            <Text > {soLuong} </Text>
                            <TouchableOpacity style={{backgroundColor: 'gray', width: '20px', height: '20px'}} onPress={() => setSoLuong(soLuong+1)}> 
                                <Text  style={{justifyContent: 'center', textAlign: 'center'}}>+</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: '13px', fontWeight: '700',marginLeft:90, color:'blue'}}>Mua sau</Text>
                            <View>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.top_1_1_2}>
                    <Text style={{fontSize: '13x', fontWeight: '700'}}>Mã giảm giá đã lưu</Text>
                    <Text style={{fontSize: '14px', fontWeight: '700',color:'blue', marginLeft: '25px'}}>Xem tại đây</Text>
                </View>
                <View style={styles.top_row}>
                    <View style={{height:30,width:150, justifyContent:'center',alignItems:'center',flexDirection: 'row', borderWidth: 1, borderColor: 'blue', borderRadius: 2 }}  >
                       <TouchableOpacity style={{backgroundColor:'yellow',height:20,width:40}}></TouchableOpacity>
                        <Text style={{ fontWeight: 'bold'}}>  Mã giảm giá</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'blue',height:30,width:70, justifyContent:'center',alignItems: 'center'}}>
                        <Text style={{color:'white', fontWeight: 'bold'}}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.top_row2}>
                    <Text style={{fontSize: '20x', fontWeight: '600'}}> Bạn có phiếu quà tặng Tiki/Got it/Urbox</Text>
                    <Text style={{fontSize: '14px', fontWeight: '700',color:'blue', marginLeft: '25px'}}> Nhập tại đây</Text>

                </View>
                <View style={styles.top_row2}>
                <Text style={{fontSize: '25px', fontWeight: '100',fontWeight: 'bold'}}> Tạm tính</Text>
                <Text style={{fontSize: '20x', fontWeight: '100',fontWeight: 'bold',color:'red'}} >{Money} đ</Text>
                </View>
                <View style={{ backgroundColor: 'white',height:'100px',marginTop:'50px',justifyContent:'center'}}>
                    <View style={styles.top_rowbuton}>
                    <Text style={{fontSize: '15px', fontWeight: '100',fontWeight: 'bold',color:'gray'}}> Thành tiền</Text>
                    <Text style={{fontSize: '22x', fontWeight: '100',fontWeight: 'bold',color:'red'}}  > {Money} đ đ</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'red',height:100,justifyContent:'center',alignItems: 'center'}}>
                        <Text style={{fontSize: '20x', fontWeight: '100',fontWeight: 'bold',color:'white'}} >TIẾN HÀNH ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </View>    
           

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD'
    },
    
    hinh:{
        width: '140px',
        height: '150px',
        marginLeft: '-10px',
        marginTop: '5px'
    },
    input:{
        width:20,
        backgroundColor:'green',
    },
    top:{
        height: '40%',
        backgroundColor: 'white',
        flexDirection: 'column'
    },

    top_1: {
        flexDirection: 'row',
       
    },

    top_1_2:{
       
        justifyContent: 'space-evenly',
    },

    top_1_1_2: {
        flexDirection: 'row'
    },
    top_row:{
        justifyContent: 'space-between',
        flexDirection: 'row',    
        marginTop:'30px',
        backgroundColor: 'white',
        
    },
    top_row2:{
        flexDirection: 'row',     
        marginTop:'20px',
        backgroundColor: 'white',
        height:'80px',
        justifyContent:'space-between'
    
    },
    top_rowbuton:{
        flexDirection: 'row',     
        backgroundColor: 'white',
        height:'40px',
        justifyContent:'space-between',
        marginTop:'70px',
    
    },




 

})