import React, { useState } from 'react'
import { StyleSheet, Text, View , Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import {product} from '../sampleData/sampleData';
import componentStyle from '../components/componentStyle'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slices/cartSlice';
import { useSelector } from 'react-redux';
import CartIcon from '../components/cartIcon';


export default function Product({route,navigation}) {
    const {itemData} = route.params;
    const productData = useSelector(state => state.product.productState)
 // const [productData, setProductData] = useState(product)
  const [packs,setPacks] = useState(product)
  const dispatch = useDispatch();
  



  return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <AntDesign name='arrowleft' size={20} onPress={()=> navigation.navigate('HomeScreen')} />   
            <CartIcon navigation={navigation}></CartIcon>
        </View>
        <View style={styles.productArea}>
        <View style={styles.productView}>
           <Text style={componentStyle.category}>{itemData.category}</Text>
           <Text style={componentStyle.title}>{itemData.title}</Text>
            <View style={styles.productImages}>
                <Image style={styles.productImage} source={itemData.image} ></Image>
                <View style={styles.indiImageContainer}>
                    <Text>Ingredient</Text>
                {itemData.ingredient.map((items,index)=>(
                    <View  style={styles.indiImage} >
                        <Image style={styles.ingridient} key={index} source={items.image}  ></Image>
                            <Text>{items.name}</Text>
                    </View>
                ))}
                </View>
            </View>
         
          
        </View>
        <View>
            <Text  style={styles.Description}>Description</Text>
            <Text style={styles.descriptionText}>{itemData.description}</Text>
        </View>
        <View style={styles.cartbtnArea}>
            <Text style={styles.price}>${itemData.price}</Text>
            <TouchableOpacity style={styles.addtoCartBtn} onPress={()=>dispatch(addToCart(itemData))}><Text style={styles.cart_btn_text}>Add to cart</Text></TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

// ()=>navigation.navigate('CartView',{item:itemData}



const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: '#fff',
      display:'flex'
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
        width:'92%',
        height:450,
        marginLeft:15,
      
      },
      ingridient:{
        width:80,
        height:80, 
        borderRadius:20,
        
      },
      addtoCartBtn:{
        width:'100%',
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
        height:380,
        marginTop:20,
        padding:5,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fcfafa',
        elevation:1,
        borderRadius:10,
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
        borderRadius:10,
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
        height:680,
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
    }
    
   
  });
  