import React, { startTransition } from 'react'
import { StyleSheet, Text, View , Image, ScrollView, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import Product from '../components/product';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import CartIcon from '../components/cartIcon';
import { useDispatch } from 'react-redux';
import { filterProduct,AllProduct } from '../components/slices/productSlice';


function HomeScreen({navigation}) {
  const filterProductDispatch = useDispatch()
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
            <Image style={styles.homeImg} source={require('../assets/profile.jpeg')}></Image>
            <CartIcon navigation={navigation}></CartIcon>
        </View>
        <Text style={styles.homeTitile}>New Collections</Text>
        <ScrollView horizontal={true}  style={styles.categoryContainer}>
            <TouchableOpacity onPress={()=>filterProductDispatch(AllProduct())}><Text style={styles.categoryTitile}>ALL</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>filterProductDispatch(filterProduct("skin care"))}><Text style={styles.categoryTitile}>Skin Care</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>filterProductDispatch(filterProduct("Body care"))}><Text style={styles.categoryTitile}>Body Care</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>filterProductDispatch(filterProduct("Hair care"))}><Text style={styles.categoryTitile}>Hair Care</Text></TouchableOpacity>
        </ScrollView>
       <Product navigation={navigation}></Product>
    </SafeAreaView>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      display:'flex'
    },
    topBar:{
      height:100,
      width:'100%',
      paddingTop:40,
      paddingLeft: 10, 
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
      
    },
    homeTitile:{
      fontSize:22,
      fontWeight:'700',
      color:'black',
      marginLeft:12,
    },
    homeImg: {
      width:50,
      height:50,
      marginLeft:5,
      borderRadius:50,
      objectFit:'cover'
    },
    categoryContainer:{
      width:"95%",
      height:60,
      marginLeft:10,
      marginRight:10,
    },
    categoryTitile:{
      fontSize:16,
      fontWeight:'400',
      margin:10,
      textTransform:'uppercase',
      marginLeft:7,
      backgroundColor:'#f52560',
      padding:5,
      paddingHorizontal:10,
      color:'#fff',
      borderRadius:5,
    },
    productContainer:{
      width:"95%",
      height:400,
      marginLeft:10,
      display:'flex',
      flexDirection:'row'
    },
  
  });
  