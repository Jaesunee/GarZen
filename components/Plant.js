import React, {Component} from 'react';
import { View } from 'react-native';




const styles = StyleSheet.create({
    container : {
        paddingTop: 25,
    },
    image : {
        width: 50,
        height: 50,
    },
});

class Plant extends Component {
    constructor(plantType) {
        this.plantType = plantType;
    }
    
    render() {

        return <View style = {styles.image}>
            <Text>{this.plantType}</Text>
            <Image style = {styles.image}
            source={require('../pictures/' + this.plantType + '.png')}/>
        </View>;
    }
};


export default Plant;