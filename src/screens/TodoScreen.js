import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { AppCard } from '../ui/AppCard';
import { EditTask } from '../components/EditTask';
import { AppTextBold } from '../ui/AppTextBold';
import { AppButton } from '../ui/AppButton';

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
                onPress={GoBack}
                color={THEME.COLOR_STANDART}
              >
                <AntDesign name='back' size={20} color='white'/>
                  &nbsp;Назад
              </AppButton>
            </View>
            <View style={styles.btn}>
              <AppButton
                onPress={() => DelTask(todo.id)}
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