import React from 'react'
import { StyleSheet, View, Image } from 'react-native'



const Line = () => {
        return (
            <Image
            source = {require('../assets/line.png')}
            style = {style.line}
            />
    );
};

const style = StyleSheet.create({
    line: {
        width: 400,
        height: 50,
        padding:0,
        
    }
});

export default Line;