import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  /** добавляем стейт */
  const [todos, setTodos] = useState([]);

  const SetTodo = (title) => {
    // setTodos(todos.concat([newTodo])); // можно и так
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title,
    }]);
  };

  const RemoveTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Navbar title='Приложение на React Native' />
      <AddTodo onSubmit={SetTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onDel={RemoveTodo} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});
