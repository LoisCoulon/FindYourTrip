import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/* import { TabNavigator } from 'react-navigation'; */

import Banner from './components/banner';
import Line from './components/line';
import Home from './components/home';
import Activity from './components/activity';


export default function App() {
  return (
    <ScrollView contentContainerStyle = {styles.container}>
      <Banner/>
      <Line/>
      <Home/>
      <Activity/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
});

/* const NavBar = TabNavigator({
  Home: { screen : Home},
  Activity: { screen : Activity}

}) */