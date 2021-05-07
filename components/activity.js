import React from 'react';

import { SafeAreaView, View, StyleSheet, Button } from 'react-native';
import Activity from './banner';

const NavActivity = () => {
    return(
        <View>
            <Button
            onPress= {onPress}
            title= "Sports"
            color= "#ffff"
            accessibilityLabel="Découvrir les voyages sportifs"
            />
        </View>
    )
};

export default Activity;