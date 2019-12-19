import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
} from 'react-native';
import { AppTextBold } from './AppTextBold';
import { THEME } from '../../theme';

export const AppButton = ({
    children,
    onPress,
    color=THEME.COLOR_STANDART,
    textColor='white'
}) => {
    /** Проверяем какая операционная система, и если андроид то ставим эффект который не поддерживает яблоко иначе ставим другой компонент */
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <Wrapper onPress={onPress}>
            <View
                style ={{...styles.button, backgroundColor: color}}
            >
                <AppTextBold 
                    style ={{...styles.text, color: textColor}}
                >{children}</AppTextBold>
            </View>
        </Wrapper>
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