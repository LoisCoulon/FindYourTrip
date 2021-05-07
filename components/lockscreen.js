import React from 'react';

import { Image, StyleSheet } from 'react-native';

const Lockscreen= () => {
    return(
        <Image 
        source = {require('../assets/logo.png')}
        style= {style.carre }
        />
    );
};


const style = StyleSheet.create({
    carre: {
        width:100,
        height: 100,
    }
})
export default Lockscreen;