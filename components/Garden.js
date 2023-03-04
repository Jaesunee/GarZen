import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    board: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#333',
        margin: 0,
    },
    square: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 48,
    },
});

class Garden extends React.Component {
    renderSquare(i) {
      const Component = this.props.plantType;
      return (
        <TouchableOpacity style={styles.square} onPress={() => this.props.onPress(i)}>
          <Plant plantType = {Component} />
        </TouchableOpacity>
      );
    }
  
    render() {
      return (
        <View>
          <View style={styles.board}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </View>
          <View style={styles.board}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </View>
          <View style={styles.board}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </View>
        </View>
      );
    }
}
  

export default Garden