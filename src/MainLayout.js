import React, { useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todo/TodoContext';
import { ScreenContext } from './context/screen/ScreenContext';

export const MainLayout = () => {
  const {
    todos,
    AddTodo,
    RemoveTodo,
    UpdateTodo,
  } = useContext(TodoContext);
  const { todoId, ChangeScreen } = useContext(ScreenContext);

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

  let content = !todoId ?
    <MainScreen
      todos={todos}
      SetTodo={AddTodo}
      RemoveTodo={RemoveTodo}
      OpenTask={ChangeScreen}
    /> :
    <TodoScreen
      GoBack={() => ChangeScreen(null)}
      todo={todos.find(item => item.id === todoId)}
      DelTask={RemoveTodo}
      onSave={UpdateTodo}
    />
  
    return (
        <View style={styles.container}>
            <Navbar title='Приложение на React Native' />
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});