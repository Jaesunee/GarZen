import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';

import Garden from "../Garden";
import Plant from "../Plant";
import Menu from '../Menu';
import Test from "../Test";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.center}>
            <Text> Plant some shit </Text>
            <Menu/>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
});

export default HomeScreen