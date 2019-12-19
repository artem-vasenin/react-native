import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AppTextBold } from './AppTextBold';
import { THEME } from '../../theme';

export const AppButton = ({
    children,
    onPress,
    color=THEME.COLOR_STANDART,
    textColor='white'
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style ={{...styles.button, backgroundColor: color}}
            >
                <AppTextBold 
                    style ={{...styles.text, color: textColor}}
                >{children}</AppTextBold>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textTransform: 'uppercase',
    }
});