import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { AppButton } from '../ui/AppButton';

export const EditTask = ({ visible, onCalcel, value, onSave }) => {
    const [title, setTitle] = useState(value);

    const Save = () => {
        if (title.trim().length < 3) {
            Alert.alert('Ошибка!', `Минимальная длина названия 3 символа, а сейчас ${title.trim().length} символов`)
        } else {
            onSave(title);
        }
    };

    const CancelHandler = () => {
        setTitle(value)
        onCalcel();
    };

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
                    value={title}
                    onChangeText={setTitle}
                />
                <View style={styles.actions}>
                    <AppButton onPress={CancelHandler}>
                        <FontAwesome
                            name='remove'
                            size={20}
                            style={{marginRight: 10}}
                        />&nbsp;Отменить
                    </AppButton>

                    <AppButton
                        onPress={Save}
                        color={THEME.COLOR_PRIMARY}
                    >
                        Сохранить&nbsp;
                        <FontAwesome
                            name='save'
                            size={20}
                            style={{marginRight: 10}}
                        />
                    </AppButton>
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