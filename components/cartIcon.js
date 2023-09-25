import { StyleSheet, Text, View , Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function CartIcon({navigation}) {
    const cartCount = useSelector(state=> state.cart.item)

  return (
    <View style={styles.cartIconContainer}>
    {(cartCount.length<1)? "":
    <Text style={styles.cartIconSuffix}>{cartCount.length}</Text>} 
         <Ionicons name='cart-outline' size={35} style={styles.carticon} onPress={()=>{ navigation.navigate('CartView',{item:""})}} />  
      {/* search icon */}
      {/* menu icon */}
  </View>
  )
}



const styles = StyleSheet.create({
    carticon:{
        marginTop:5,
        color:'#f52560',
        marginRight:15,
      },
      cartIconContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      },
      cartIconSuffix:{
        width:17,
        height:17,
        backgroundColor:'#f52560',
        borderRadius:8,
        marginBottom:-12,
        marginRight:-10,
        display:'flex',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        color:'#fff',
        fontWeight:'500'
      }
})