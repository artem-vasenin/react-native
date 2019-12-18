import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { THEME } from '../../theme';

export const TodoScreen = ({GoBack, todo}) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <View style={styles.actions}>
              <View style={styles.btn}>
                <Button
                    title='Назад'
                    onPress={GoBack}
                    color={THEME.COLOR_STANDART}
                />
              </View>
              <View style={styles.btn}>
                <Button
                    title='Удалить'
                    onPress={GoBack}
                    color={THEME.COLOR_DANGER}
                />
              </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: '45%'
  }
});