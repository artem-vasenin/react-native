import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todo/TodoContext';

export const MainLayout = () => {
  const {todos, AddTodo, RemoveTodo, UpdateTodo} = useContext(TodoContext);
  const [todoId, setTodoId] = useState(null);
  // const [todos, setTodos] = useState([]);

  // const SetTodo = (title) => {
  //   setTodos(prev => [...prev, {
  //     id: Date.now().toString(),
  //     title,
  //   }]);
  // };

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

  // const UpdateTask = (id, title) => {
  //   setTodos(old => old.map(item => {
  //     if (item.id === id) {
  //       item.title = title;
  //     }
  //     return item;
  //   }))
  // };

  let content = !todoId ?
    <MainScreen
      todos={todos}
      SetTodo={AddTodo}
      RemoveTodo={RemoveTodo}
      OpenTask={setTodoId}
    /> :
    <TodoScreen
      GoBack={() => setTodoId(null)}
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