import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "./HomeScreen";
import Product from "./Product";
import Cart from "./Cart";


const Stack = createNativeStackNavigator()


function HomeStack() {
  return (
    <NavigationContainer> 
        <Stack.Navigator>
            <Stack.Screen  options={{headerShown: false}}  name="HomeScreen" component = {HomeScreen}  /> 
            <Stack.Screen  options={{headerShown: false}}  name="ProductView" component = {Product} /> 
            <Stack.Screen  options={{headerShown: false}}  name="CartView" component = {Cart}  /> 
        </Stack.Navigator>             
    </NavigationContainer> 
  
  )
}

export default HomeStack