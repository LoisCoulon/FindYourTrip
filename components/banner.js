import React from 'react'
import { StyleSheet, Image } from 'react-native'



const Banner = () => {
        return (
            <Image 
            source ={require('../assets/banner.png')}
            style= {style.banner}
            />
    );
};

const style = StyleSheet.create({
    banner: {
        height: 100,
        padding:0,
        width:350,
        resizeMode: "cover"
    }
});

export default Banner;