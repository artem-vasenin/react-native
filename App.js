import React, { useState } from 'react';
import {
  StyleSheet,
  Alert,
  View
} from 'react-native';
/** ставим и импортируем пакет экспо для работы со шрифтами */
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

/** Экспо фонт асинхронный поэтому создаем асинхронную ф-цию */
async function LoadApp() {
  await Font.loadAsync({
    'roboto-r': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-b': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

export default function App() {
  /** добавляем стейт */
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading
        startAsync={LoadApp}
        onError={err => console.error(err)}
        onFinish={() => setIsReady(true)}
      />
  }

  const SetTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title,
    }]);
  };

  const RemoveTodo = id => {
    const item = todos.find(item => item.id === id);
    Alert.alert(
      'Удалить элемент',
      `Точно надо удалить ${item.title}`,
      [
        { text: 'Отмена', style: 'cancel' },
        {text: 'Удалить', style: 'destructive', onPress: () => {
          setTodoId(null);
          setTodos(prev => prev.filter(item => item.id !== id));
        }},
      ],
      {cancelable: false},
    );
  };

  const UpdateTask = (id, title) => {
    setTodos(old => old.map(item => {
      if (item.id === id) {
        item.title = title;
      }
      return item;
    }))
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
      DelTask={RemoveTodo}
      onSave={UpdateTask}
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
