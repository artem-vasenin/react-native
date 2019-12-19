import React, { useState } from 'react';
/** ставим и импортируем пакет экспо для работы со шрифтами */
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/TodoState';

/** Экспо фонт асинхронный поэтому создаем асинхронную ф-цию */
async function LoadApp() {
  await Font.loadAsync({
    'roboto-r': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-b': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

export default function App() {
  /** добавляем стейт */
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading
        startAsync={LoadApp}
        onError={err => console.error(err)}
        onFinish={() => setIsReady(true)}
      />
  }

  return (
    <TodoState>
      <MainLayout />
    </TodoState>
  );
}