import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { ScreenContext } from './context/screen/ScreenContext';

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);
  
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