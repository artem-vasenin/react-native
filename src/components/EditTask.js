import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Modal,
  TextInput,
} from 'react-native';
import { THEME } from '../../theme';

export const EditTask = ({visible, onCalcel}) => {
    return (
        <Modal
            visible={visible}
            animationType='slide'
            transparent={false}
        >
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    placeholder='Введите название'
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.actions}>
                    <Button
                        title='Отменить'
                        onPress={onCalcel}
                        color={THEME.COLOR_STANDART}
                    />
                    <Button
                        title='Сохранить'
                        color={THEME.COLOR_PRIMARY}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 10,
    },
    input: {
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: THEME.COLOR_STANDART,
        padding: 10,
        margin: 10,
    },
    actions: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});