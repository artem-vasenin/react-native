import React, { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  /** добавляем стейт */
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  const SetTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title,
    }]);
  };

  const RemoveTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  let content = !todoId ?
    <MainScreen
      todos={todos}
      SetTodo={SetTodo}
      RemoveTodo={RemoveTodo}
      OpenTask={setTodoId}
    /> :
    <TodoScreen
      GoBack={() => setTodoId(null)}
      todo={todos.find(item => item.id === todoId)}
    />

  return (
    <View style={styles.container}>
      <Navbar title='Приложение на React Native' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});
