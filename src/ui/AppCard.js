import React from 'react';
import { StyleSheet, View } from 'react-native';

export const AppCard = props => (
    <View style={styles.container}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 20,
    }
});