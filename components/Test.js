import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>HI</Text>
      </View>
    );
  }
}

export default Test;
