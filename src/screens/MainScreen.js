import React from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ SetTodo, todos, RemoveTodo}) => {
    return (
        <View>
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