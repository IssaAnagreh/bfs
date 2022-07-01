import React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {DARK_COLORS} from '../../lib/theme/colors';
import {AddNewTodo} from '../../modules/add-new-todo/add-new-todo';
import {AppHeader} from '../../modules/app-header/app-header';
import {AppText} from '../../modules/app-text/app-text';
import {TodoItem} from '../../modules/todo-item/todo-item';
import {TodoItemType} from '../../modules/todo-item/todo-item.type';
import {HomeTemplatePropsInterface} from './home.template.interface';

export function HomeTemplate(props: HomeTemplatePropsInterface) {
  const renderItem = ({item}: {item: TodoItemType}) => {
    return <TodoItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <AppHeader title={props.title} />
      <FlatList
        contentContainerStyle={styles.list}
        data={props.items}
        extraData={props}
        renderItem={renderItem}
        keyExtractor={item => `${item.key}`}
      />
      <AddNewTodo
        style={styles.input}
        containerStyle={styles.inputContainer}
        right={
          <TouchableOpacity onPress={props.addItem} style={styles.btn}>
            <AppText style={styles.btnTxt}>+</AppText>
          </TouchableOpacity>
        }
        onChangeTxt={props.changeTxt}
        ref={props.inputRef}
      />
    </View>
  );
}

const btnSize = 50;
const listTopMargin = 10;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_COLORS.BLUE['#1DA1F2'],
  },
  list: {
    marginTop: listTopMargin,
    paddingBottom: listTopMargin,
  },
  inputContainer: {
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
  },
  btn: {
    width: btnSize,
    height: btnSize,
    borderRadius: btnSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DARK_COLORS.BLUE['#1DA1F2'],
    marginLeft: 13,
  },
  btnTxt: {
    fontSize: 28,
    color: 'white',
  },
});
