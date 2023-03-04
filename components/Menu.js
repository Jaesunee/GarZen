import React, {Component} from "react";
import { Platform, StyleSheet, Text, View } from 'react-native';
import Plant from "./Plant";

const plantTypes = { tomato : new Plant('tomato'), potato: new Plant('potato'), radish : new Plant('radish')};

const styles = StyleSheet.create({
    
});

class Garden extends Component {
    constructor(){
        this.plants = []
        for(let i = 0; i < Object.keys(plantTypes).length; i++){
            this.plants.push(Objects.keys(plantTypes)[i]);
        }
    }


    render() {
        const dataRow = this.plants.map(plant => {
            return(
                {plantTypes:plant}
            );
        })
    }
};

export default Garden;