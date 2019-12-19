import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { AppTextBold } from '../ui/AppTextBold'

export const Todo = ({ todo, onDel, onOpen }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => onOpen(todo.id)}
            onLongPress={() => onDel(todo.id)}
        >
            <View style={styles.todo}>
                <AppTextBold style={styles.title}>
                    {todo.title}
                </AppTextBold>
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
        color: '#555',
    }
});