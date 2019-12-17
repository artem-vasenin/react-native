import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    const Submit = () => {
        onSubmit('Test');
    };

    return (
        <View style={styles.addTodo}>
            <TextInput style={styles.input} />
            <Button
                style={styles.btn}
                title="Добавить"
                onPress={Submit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    addTodo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 3,
    },
    btn: {}
});