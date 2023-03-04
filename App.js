import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Garden from "./components/Garden";
import Taskbar from "./components/Garden";
import Timer from "./components/Timer"
import Test from "./components/Test"

export default function App() {
  return (
    <View style={styles.container}>
      
    
    
      <Garden component={Test} />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
