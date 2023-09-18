import React, { useState } from 'react'
import { StyleSheet, Text, View , Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import {product} from '../sampleData/sampleData';


import componentStyle from './componentStyle'

export default function Product() {

  const [productData, setProductData] = useState(product)
  const [packs,setPacks] = useState(product)
  
  
  return (
    <>
    <View style={componentStyle.container}  >
        <ScrollView horizontal={true} style={componentStyle.productContainer}>
            {productData.map((product_,index)=>(
              <TouchableOpacity style={componentStyle.productItem}>
                <View key={index}>
                <Image key={index} style={componentStyle.productImage} 
                source={product_.image} ></Image>
                <Text key={index+"a"}  style={componentStyle.category}>{product_.category}</Text>
                <Text key={index+"b"} style={componentStyle.title}>{product_.title}</Text>
                <View key={index+"c"} style={componentStyle.cart}>
                  <Text key={index+"c"} style={componentStyle.cart_price}>$ {product_.price}</Text>
                  <TouchableOpacity style={componentStyle.cart_btn}><Text style={componentStyle.cart_btn_text}>+</Text></TouchableOpacity>
                </View>
                </View>
               
            </TouchableOpacity>
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