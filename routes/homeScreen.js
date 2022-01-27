import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../screens/details';
import Home from '../screens/home';
import ImageHeader from '../shared/header';

const Stack = createNativeStackNavigator();

export default function HomeScreen({ showHandler }) {
    let options = {
        headerShown: !showHandler(),
        swipeEnabled: !showHandler(),
        headerBackground: (
            <Image
                style={StyleSheet.absoluteFill}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
            />
        ),
        headerTitle: () => (
            <ImageHeader title="" />
        ),
        headerTitleAlign: 'center'
    };

    return (
        <Stack.Navigator navigationOptions={options} >
            <Stack.Screen name="Home" options={options}>
                {props => <Home {...props} showHandler={showHandler} />}
            </Stack.Screen>
            <Stack.Screen name="Details" >
                {props => <DetailsScreen {...props} showHandler={showHandler} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}