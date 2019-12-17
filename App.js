import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title='Приложение на React Native' />
      <AddTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
