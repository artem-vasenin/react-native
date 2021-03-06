import React, { useState, useContext } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { AppCard } from '../ui/AppCard';
import { EditTask } from '../components/EditTask';
import { AppTextBold } from '../ui/AppTextBold';
import { AppButton } from '../ui/AppButton';
import { TodoContext } from '../context/todo/TodoContext';
import { ScreenContext } from '../context/screen/ScreenContext';

//GoBack, DelTask, onSave
export const TodoScreen = () => {
  const { todos, UpdateTodo, RemoveTodo } = useContext(TodoContext);
  const { todoId, ChangeScreen } = useContext(ScreenContext);
  const [modal, setModal] = useState(false);

  const todo = todos.find(item => item.id === todoId);

  const SaveHandler = async title => {
    await UpdateTodo(todo.id, title);
    setModal(false);
  }

  return (
      <View>
        <EditTask
          visible={modal}
          onCalcel={() => setModal(false)}
          value={todo.title}
          onSave={SaveHandler}
        />

          <AppCard style={styles.card}>
            <AppTextBold style={styles.cardTitle}>
              {todo.title}
            </AppTextBold>
            <AppButton onPress={() => setModal(true)}>
              <FontAwesome
                name='edit'
                size={20}
                style={{marginRight: 10}}
              />&nbsp;Редактировать
            </AppButton>
          </AppCard>

          <View style={styles.actions}>
            <View style={styles.btn}>
              <AppButton
                onPress={() => ChangeScreen(null)}
                color={THEME.COLOR_STANDART}
              >
                <AntDesign name='back' size={20} color='white'/>
                  &nbsp;Назад
              </AppButton>
            </View>
            <View style={styles.btn}>
              <AppButton
                onPress={() => RemoveTodo(todo.id)}
                color={THEME.COLOR_DANGER}
              >
                Удалить&nbsp;
                <FontAwesome
                name='remove'
                size={20}
                style={{marginRight: 10}}
              />
              </AppButton>
            </View>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    /** делаем зависимость от ширины окна */
    width: Dimensions.get('window').width / 2.5,
    // width: '45%',
  },
  card: {
    // тень для iOS
    shadowColor: THEME.COLOR_STANDART,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {width: 2, height: 2},
    // тень для Android
    elevation: 8,
  },
  cardTitle: {
    marginBottom: 20,
    fontSize: 24,
  }
});