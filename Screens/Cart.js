import React, { useState } from 'react'
import { StyleSheet, Text, View , Image, ScrollView, Button, TouchableOpacity, Alert} from 'react-native';
import {product} from '../sampleData/sampleData';
import componentStyle from '../components/componentStyle'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import CartItem from '../components/cartItem';
import { FlatList } from 'react-native';
import EmptyCart from '../components/emptyCart';

export default function Cart({route,navigation}) {
    const cartItemData = useSelector(state => state.cart.item)
    const total = useSelector(state => state.cart.total)
    const CartCount = cartItemData.length;
  
  return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <AntDesign name='arrowleft' size={20} onPress={()=> navigation.navigate('HomeScreen')} />   
            <Entypo name='dots-three-vertical' size={20} />
        </View>
        {/* product in cart */}
        {(CartCount<1)? <EmptyCart  navigation={navigation} /> : 
        <FlatList style={styles.cartitemContainer}
            data={cartItemData}
            renderItem={({item})=>(
              <CartItem item={item} navigation={navigation}/>
            )}/> }
        
        {/* product in cart */}
        {(CartCount<1)? "":
        <View style={styles.cartbtnArea}>
          <View style={styles.totalContainer}>
              <Text style={styles.totalTitle}>Total</Text>
              <Text style={styles.totalprice}><Text style={styles.dollorsign}>$</Text>{total}</Text>
          </View>
              <TouchableOpacity style={styles.addtoCartBtn}><Text style={styles.cart_btn_text}>Payment</Text></TouchableOpacity> 
          </View>
        }
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      display:'flex',
      paddingVertical:20
    },
    topBar:{
      width:'100%',
      paddingTop:40,
      paddingLeft: 10, 
      paddingRight:10,
      marginBottom:15,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
      },
      productView:{
        width:'90%',
        height:450,
        marginLeft:15,
      
      },
      ingridient:{
        width:80,
        height:80, 
        borderRadius:20,
      },
      addtoCartBtn:{
        width:'50%',
        height:50,
        textAlign:'center',
        backgroundColor:'#f52560',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        
      },
      cart_btn_text:{
        fontSize:20,
        color:'#fff'
    },
    productImages:{
        width:"100%",
        height:400,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    productImage:{
        width:200,
        height:340,
        marginRight:10,
        objectFit:"cover",
        borderRadius:10,
        marginLeft:10,
    },
    indiImageContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'column'
    },
    indiImage:{
        display:'flex',
        marginBottom:10,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'column',
        borderRadius:10
    },
    Description:{
        fontWeight:'500',
        fontSize:18,
        marginLeft:20
    },
    descriptionText:{
        width:'80%',
        fontWeight:'300',
        fontSize:16,
        color:'gray',
        marginTop:10,
        marginLeft:20
    },
    productArea:{
        height:700,
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column'
    },
    price:{
        width:'80%',
        fontWeight:'700',
        fontSize:22,
        marginTop:10,
        marginBottom:10,
        marginLeft:20
    },
    //new css
    productInCart:{
      width:'80%',
      height:120,
      borderRadius:10,
      marginLeft:35,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#fcfafa',
      elevation:5,
    
    },
    product_cart_image:{

    },
    product_cart_image_file:{
      width:90,
      height:90,
      objectFit:'cover',
      marginLeft:10,
      marginTop:10,
      borderRadius:10,
    },
    product_details:{
      width:'40%',
      margin:10,
      justifyContent:'center'
    },
    category:{
      color:'#f52560',
      textTransform:'uppercase'
    },
    title:{
      fontSize:18,
      fontWeight:'700',
      
      marginBottom:10,
    },
    price:{
      fontSize:18,
      fontWeight:'700',
    },
    cartbtnArea:{
      width:'90%',
      height:70,
      display:'flex',
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:10,
      position:'absolute',
      bottom:20,
      marginLeft:20,
      backgroundColor:'#fff'
    },
    totalprice:{
      fontSize:20,
      fontWeight:'700',
    },
    product_quntity:{
      width:35,
      height:'90%',
      marginTop:5,
      borderWidth:1,
      borderRadius:10,
      borderColor:'gray',
      marginRight:20,
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'center',
    },
    incbtn:{
      width:'100%',
      alignItems:'center',
      textAlign:'center',
      fontSize:18,
    },
    totalContainer:{
      width:'auto',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
  
    },
    totalTitle:{
      width:'100%',
      color:'#f52560',
      textAlign:'left'
    },
    dollorsign:{
      fontSize:14,
    },
    shadowProp: {  
      shadowOffset: {width: -2, height: '100%'},  
      shadowColor: '#171717',  
      shadowOpacity: 0.5,  
      shadowRadius: 3,  
    },  
    
    
   
  });
  