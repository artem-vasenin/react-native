import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Alert
} from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    /** Создаем локальный стейт с начальным значением '' */
    const [value, setValue] = useState('');

    const Submit = () => {
        if (!value.trim()) {
            /** выводим алертом ошибку */
            Alert.alert('Заполните название задачи');
        } else {
            onSubmit(value);
            setValue('');
        }
    };

    return (
        <View style={styles.addTodo}>
            <TextInput
                style={styles.input}
                /** передаем ф-цию стейта которая примет значнеие инпута */
                onChangeText={setValue}
                /** получаем значение value из стейта */
                value={value}
                placeholder='Введите название'
            />
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