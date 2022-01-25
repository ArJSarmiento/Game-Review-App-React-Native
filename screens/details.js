import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function DetailsScreen({ navigation }) {
    navigation.navigation.setOptions({
        headerShown: false,
    });
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Home')}
                title="Go to home"
            />
        </View>
    );
}

export default DetailsScreen;