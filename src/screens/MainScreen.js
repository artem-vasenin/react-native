import React, {useContext, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image
} from 'react-native';
import { Todo } from '../components/Todo';
import { AddTodo } from '../components/AddTodo';
import { TodoContext } from '../context/todo/TodoContext';
import { ScreenContext } from '../context/screen/ScreenContext';

export const MainScreen = () => {
    const {
        addTodo,
        todos,
        RemoveTodo,
        FetchTodos,
        loading,
        error,
    } = useContext(TodoContext);
    const { ChangeScreen } = useContext(ScreenContext);

    const LoadTodos = useCallback(
        async () => await FetchTodos(),
        [FetchTodos],
    );

    useEffect(() => {
        LoadTodos();
    }, []);

    let content = (<FlatList
    data={todos}
    renderItem={({ item }) => <Todo
        todo={item}
        onDel={RemoveTodo}
        onOpen={ChangeScreen}
    />}
    keyExtractor={item => item.id.toString()}
    />);

    if (!todos.length) {
        content = (
            <View style={styles.imgWrap}>
                <Image
                    style={styles.img}
                    source={require('../../assets/rn.png')}
                    resizeMode='contain'
                ></Image>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        marginTop: 20,
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
    }
  });