import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

function DetailsScreen({ route, navigation, showHandler }) {
    showHandler(false);
    return (
        <View style={globalStyles.container}>
            <Text>{route.params.title}</Text>
            <Text>{route.params.body}</Text>
            <Text>{route.params.rating}</Text>
        </View>
    );
}

export default DetailsScreen;