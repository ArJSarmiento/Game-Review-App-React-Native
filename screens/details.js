import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

function DetailsScreen({ route, navigation, showHandler }) {
    showHandler(false);
    const rating = route.params.rating;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})

export default DetailsScreen;