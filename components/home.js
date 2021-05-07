import React from 'react'
import { StyleSheet, SafeAreaView, TextInput, Text } from 'react-native'



const Home = () => {
        const [text, onChangeText] = React.useState(null);
        
        return (
        <SafeAreaView>
            <Text style={ style.text}> Que cherchez-vous ?</Text>
            <TextInput
            style={style.input}
            textAlign={'left'}
            underlineColorAndroid='transparent'
            onChangeText={onChangeText}
            placeholder="  Rechercher une activité"
            value={text} />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#051B00'
    },
    text: {
        color: "#9BC53D",
        fontSize: 14,
        fontWeight: "bold"
    }
});

export default Home;