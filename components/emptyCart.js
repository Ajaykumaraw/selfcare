import { StyleSheet, Text, View , Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function EmptyCart({navigation}) {
  return (
    <View style={styles.emptyCartContainer}>
        <View style={styles.emptyCart}>
            <Ionicons name='cart-outline' size={100}  />  
            <Text style={styles.emptyCartTitle}>Your cart is empty</Text>
            <Text style={styles.emptyCartText}>You have no item in your shopping cart.</Text>
            <Text style={styles.emptyCartText}>Let's go buy something!</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')} style={styles.goto_shop}><Text style={styles.goto_shop_text}>Shop Now</Text></TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    emptyCartContainer:{
        width:'100%',
        height:500,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    emptyCart:{
        width: 300,
        height:100,
        display:'flex',
        alignItems:'center',
        textAlign:'justify',
        justifyContent:'center',
    },
    emptyCartText:{
        fontSize:16,
        color:'gray',
    },
    emptyCartTitle:{
        fontSize:26,
        fontWeight:'500',
        color:'#f52560'
    },
    goto_shop:{
        width:'40%',
        height:40,
        textAlign:'center',
        backgroundColor:'#f52560',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:20,
    },
    goto_shop_text:{
        color:'#fff'
    }
    
})

