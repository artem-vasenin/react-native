import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Todo = ({ todo }) => {
    return (
        <View style={styles.todo}>
            <Text style={styles.title}>{todo.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    title: {
        color: '#555'
    }
});