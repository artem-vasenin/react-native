import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { THEME } from '../../theme';
import { AppTextBold } from '../ui/AppTextBold';

export const Navbar = props => {
    return (
        <View style={{
            ...styles.navbar,
            ...Platform.select({
                ios: styles.navIos,
                android: styles.navAndroid
            })
        }}>
            <AppTextBold style={styles.text}>
              {props.title}
            </AppTextBold>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    navAndroid: {
        backgroundColor: THEME.COLOR_PRIMARY,
    },
    navIos: {
        borderBottomColor: THEME.COLOR_PRIMARY,
        borderBottomWidth: 1,
    },
    text: {
        color: Platform.OS === 'ios' ? 'black' : 'white',
        fontSize: 20,
    }
});