import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image
} from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ SetTodo, todos, RemoveTodo, OpenTask}) => {
    let content = (<FlatList
    data={todos}
    renderItem={({ item }) => <Todo
        todo={item}
        onDel={RemoveTodo}
        onOpen={OpenTask}
    />}
    keyExtractor={item => item.id.toString()}
    />);

    if (!todos.length) {
        content = (
            <View style={styles.imgWrap}>
                <Image
                    style={styles.img}
                    source={require('../../assets/rn.png')}
                    // source={{uri: 'https://androiddev.apptractor.ru/wp-content/uploads/2018/07/react-native-1.png'}}
                    resizeMode='contain'
                ></Image>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <AddTodo onSubmit={SetTodo} />
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