import React, { useState } from 'react';
import {
    View,
    TextInput,
    Keyboard,
    StyleSheet,
    Alert
} from 'react-native';
/** Подключаем пакет для иконок */
import { AntDesign } from '@expo/vector-icons';

import { THEME } from '../../theme';

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
            Keyboard.dismiss();
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
                /** отключаем автокоррект Т9 */
                autoCorrect={false}
                /** отключаем написание с большой буквы */
                autoCapitalize='none'
                /** выбираем какую клаву показать */
                keyboardType='default'
            />
            <AntDesign.Button
                name="pluscircleo"
                size={24}
                color="white"
                onPress={Submit}
            >Добавить</AntDesign.Button>
        </View>
    );
};

const styles = StyleSheet.create({
    addTodo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    input: {
        width: '65%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: THEME.COLOR_STANDART,
        padding: 3,
    },
    btn: {}
});