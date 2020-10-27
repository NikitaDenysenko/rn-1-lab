import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ route }) => {
    const { name } = route.params;
    return (
        <View style={styles.container}>
            <Text>Hello, {name}</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
