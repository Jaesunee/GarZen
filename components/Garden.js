import React, {setState, useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Plant from './Plant'
import Menu from './Menu'

const data = require('../data.json'); 

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
    constructor(props){
        super(props);
        this.yard = [];
        for(let i = 0; i < 9; i++){
            this.yard.push({plant: Plant, value : -1});
        }
    }
    

    rerender(i){
      // console.log(this.yard[3].plant);
      console.log(this.yard[i].plant);
      // {this.yard[3].plant};
      var change = require('../pictures/dirt.png');
      switch((this.yard[i].value + 1) % 3){
        case 0:
          var change = require('../pictures/tomato.png');
          break;
        case 1:
          var change = require('../pictures/potato.png');
          break;
        case 2:
          var change = require('../pictures/radish.png');
          break;
      }

      this.yard[3].plant.setState({plant : change,});

    }
    

    renderSquare(i) {
      // const Component = this.props.plantType;
      return (
        <TouchableOpacity style={styles.square} onPress={this.rerender(i)}>
            <Text>{this.yard[i].plant}</Text>
          
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