import { StyleSheet } from "react-native";


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
      width:'80%',
      height:50,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:10,
      position:'absolute',
      bottom:30,
      marginLeft:20,
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
  