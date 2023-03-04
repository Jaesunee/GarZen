import React, {Component} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';




const styles = StyleSheet.create({
    container : {
        paddingTop: 25,
    },
    image : {
        width: 50,
        height: 50,
    },
});

class Plant extends React.Component {
    // constructor(plantType) {
    //     this.plantType = plantType;
    // }
    
    render() {

        var plantType = this.props.plantType;
        switch(this.props.plantType){
            case 'tomato':
                var plantType = require('../pictures/tomato.png');
                break;
            case 'radish':
                var plantType = require('../pictures/radish.png');
                break;
            case 'potato':
                var plantType = require('../pictures/potato.png');
                break;
            default:
                var plantType = require('../pictures/tomato.png');
                break;
        }

        return (<View style = {styles.container}>
            <Text>{this.plantType}</Text>
            <View>
                <Image style = {styles.image}
                source={plantType}/>
            </View>
        </View>
        );
    }
};


export default Plant;