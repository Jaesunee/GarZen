import React, {Component} from "react";
import { Platform, StyleSheet, Text, View } from 'react-native';
import Plant from "./Plant";

const plantTypes = { tomato : 'tomato', potato: 'potato', radish : 'radish'};

const styles = StyleSheet.create({
    center: {
        alignItems: 'baseline',
        display: 'flex'
    },
});

class Menu extends React.Component {
    /*constructor(){
        this.plants = []
        for(let i = 0; i < Object.keys(plantTypes).length; i++){
            this.plants.push(Objects.keys(plantTypes)[i]);
        }
    }*/

    ////for(i = 0; i < Object.keys(plantTypes).length; i++){
     //   <Plant plantType= {Objects.keys(plantTypes)[i]} />
    //}
    render() {
        return(
            <View style={styles.center}>
                <Plant plantType={plantTypes.potato} />
                <Plant plantType={plantTypes.tomato} />
                <Plant plantType={plantTypes.radish} />
            </View>
        )
    }
};

export default Menu;