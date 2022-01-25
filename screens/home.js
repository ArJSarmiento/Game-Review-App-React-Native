import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './details';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Details')}
                title="Go to details"
            />
        </View>
    );
}


function MyStack() {
    const [show, setShow] = useState(true);

    let showHandler = (value) => {
        setShow(value);
        return value;
    };

    const screenOptions = {
        headerShown: show
    };
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default function HomeScreen() {
    return (
        <MyStack />
    );
}