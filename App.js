import HomeStack from './Screens/HomeStack';
import { View,StyleSheet} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <HomeStack></HomeStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor: '#fff',
    display:'flex'
  },
})