import React, { useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { ScreenContext } from './context/screen/ScreenContext';

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  // const RemoveTodo = id => {
  //   const item = todos.find(item => item.id === id);
  //   Alert.alert(
  //     'Удалить элемент',
  //     `Точно надо удалить ${item.title}`,
  //     [
  //       { text: 'Отмена', style: 'cancel' },
  //       {text: 'Удалить', style: 'destructive', onPress: () => {
  //         setTodoId(null);
  //         setTodos(prev => prev.filter(item => item.id !== id));
  //       }},
  //     ],
  //     {cancelable: false},
  //   );
  // };
  
    return (
      <View style={styles.container}>
        <Navbar title='Приложение на React Native' />
        {!todoId ? <MainScreen /> : <TodoScreen />}
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});