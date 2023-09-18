import React from 'react'
import { StyleSheet, Text, View , Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import Product from '../components/product';


function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <Image style={styles.homeImg}></Image>
            <View>
                {/* search icon */}
                {/* menu icon */}
            </View>
        </View>
        <Text style={styles.homeTitile}>New Collections</Text>
        <ScrollView horizontal={true}  style={styles.categoryContainer}>
            <TouchableOpacity><Text style={styles.categoryTitile}>ALL</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.categoryTitile}>Skin Care</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.categoryTitile}>Body Care</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.categoryTitile}>Hair Care</Text></TouchableOpacity>
        </ScrollView>
       <Product></Product>
    </View>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      display:'flex'
    },
    topBar:{
      height:100,
      width:'100%',
      paddingTop:40,
      paddingLeft: 10, 
      
    },
    homeTitile:{
      fontSize:25,
      fontWeight:'700',
      color:'black',
      marginLeft:10,
    },
    homeImg: {
      width:50,
      height:50,
      borderRadius:50,
      borderWidth:1,
      borderColor:'black'
    },
    categoryContainer:{
      width:"100%",
      height:50,
      marginLeft:10,
    },
    categoryTitile:{
      fontSize:20,
      fontWeight:'400',
      margin:10,
      textTransform:'uppercase',
      color:'gray',
      marginLeft:10,
    },
    productContainer:{
      width:"95%",
      height:400,
      marginLeft:10,
      display:'flex',
      flexDirection:'row'
    }
  });
  