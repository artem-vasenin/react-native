import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export const Todo = ({ todo, onDel }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log('Pressed', todo.id)}
            onLongPress={() => onDel(todo.id)}
        >
            <View style={styles.todo}>
                <Text style={styles.title}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
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