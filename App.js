import HomeStack from './Screens/HomeStack';
import { StyleSheet,SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';



export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <HomeStack></HomeStack>
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    display:'flex'
  },
})