import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  /** добавляем стейт */
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // setTodos(todos.concat([newTodo])); // можно и так
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title,
    }]);
  };

  return (
    <View style={styles.container}>
      <Navbar title='Приложение на React Native' />
      <AddTodo onSubmit={addTodo} />
      <ScrollView>
        { todos.map(item => <Todo key={item.id} todo={item} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});
