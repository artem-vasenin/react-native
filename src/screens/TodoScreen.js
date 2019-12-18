import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

export const TodoScreen = ({GoBack, todo}) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <Button
                title='Назад'
                onPress={GoBack}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingBottom: 20,
    },
  });