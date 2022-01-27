import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


export default function ImageHeader({ title, navigation }) {
    return (
        <View style={styles.header}>
            <Image
                style={{
                    width: 26,
                    height: 26,
                    marginHorizontal: 10
                }}
                source={require('../assets/heart_logo.png')}
            />

            <Text style={styles.titleText}>{title}</Text>

        </View>
    );
}

let styles = StyleSheet.create({
    header:
    {
        height: "100%",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
});