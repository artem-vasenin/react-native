import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { THEME } from '../../theme';
import { AppCard } from '../ui/AppCard';
import { EditTask } from '../components/EditTask';

export const TodoScreen = ({GoBack, todo, DelTask, onSave}) => {
  const [modal, setModal] = useState(false);

  const SaveHandler = title => {
    onSave(todo.id, title);
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
            <Text style={styles.cardTitle}>{todo.title}</Text>
            <Button
                  title='Редактировать'
                  onPress={() => setModal(true)}
                  color={THEME.COLOR_STANDART}
              />
          </AppCard>

          <View style={styles.actions}>
            <View style={styles.btn}>
              <Button
                  title='Назад'
                  onPress={GoBack}
                  color={THEME.COLOR_STANDART}
              />
            </View>
            <View style={styles.btn}>
              <Button
                  title='Удалить'
                  onPress={() => DelTask(todo.id)}
                  color={THEME.COLOR_DANGER}
              />
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
    width: '45%'
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