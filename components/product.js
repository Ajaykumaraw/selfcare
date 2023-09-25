import React, { useState } from 'react'
import { StyleSheet, Text, View , Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import {product} from '../sampleData/sampleData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { addToCart } from './slices/cartSlice';
import Toast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';


import componentStyle from './componentStyle'

export default function Product({navigation}) {

  const productData = useSelector(state => state.product.productState)

  // const [productData, setProductData] = useState(product)
  const [packs,setPacks] = useState(product)
  const dispatch = useDispatch();
  
  const addToCartHandler = (product_)=>{
    dispatch(addToCart(product_))
    Toast.show(`${product_.title} is added to Cart`);
  }


  return (
    <>
    <View style={componentStyle.container}  >
        <ScrollView horizontal={true} style={componentStyle.productContainer}>
            {productData.map((product_,index)=>(
              <View style={componentStyle.productItem} >
                <View key={index}>
                  <TouchableOpacity onPress={()=> navigation.navigate('ProductView',{itemData:product_})}>
                    <Image key={index} style={componentStyle.productImage} 
                    source={product_.image} ></Image>
                </TouchableOpacity>
                <Text key={index+"a"}  style={componentStyle.category}>{product_.category}</Text>
                <Text key={index+"b"} style={componentStyle.title}>{product_.title}</Text>
                <View key={index+"c"} style={componentStyle.cart}>
                  <Text key={index+"c"} style={componentStyle.cart_price}>$ {product_.price}</Text>
                  <TouchableOpacity style={componentStyle.cart_btn} onPress={()=>addToCartHandler(product_)}><Text style={componentStyle.cart_btn_text}>+</Text></TouchableOpacity>
                </View>
                </View>
               
            </View>
            ))}
        </ScrollView>
    </View>
    <Text style={componentStyle.packs}>Packs</Text>
      <ScrollView horizontal={true} style={componentStyle.packContainer}>
              {packs.reverse().map((product_,index)=>(   
                <Image style={componentStyle.packImage} 
                source={product_.image} ></Image>
              ))}
          </ScrollView>
     </>
  )
}


// <ScrollView style={componentStyle.productContainer}>
// {productData.map((product_,index)=>(
//   <View>
//  <Image key={index} style={componentStyle.productImage} 
//  source={product_.image} ></Image>
//  <Text>{product_.title}</Text>
//  <Text>{product_.category}</Text>
//  <Text>{product_.price}</Text>
//  <Text>{product_.description}</Text>
//  {product_.ingredient.map((ingedients_,index)=>(
//   <View>
//     <Text>{ingedients_.name}</Text>
//     <Image key={index} style={componentStyle.productImage} 
//       source={ingedients_.image} ></Image>
//   </View>
//  ))}
//  </View>
// ))}
// </ScrollView>