import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {DARK_COLORS} from '../../lib/theme/colors';
import {AppText} from '../app-text/app-text';
import {TodoItemTemplatePropsInterface} from './todo-item-template-props.interface';

export function TodoItemTemplate(props: TodoItemTemplatePropsInterface) {
  return (
    <TouchableOpacity
      testID="todo-item"
      activeOpacity={0.8}
      onPress={props.toggleItem}
      style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.radio}>
          {props.item.isCanceled && <View style={styles.circle} />}
        </View>
        <AppText
          style={[styles.txt, props.item.isCanceled ? styles.txtStrike : {}]}>
          {props.item.title}
        </AppText>
      </View>
      <TouchableOpacity onPress={() => props.cancel(props.item.key)}>
        <AppText style={styles.cancel}>{'\u274C'}</AppText>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const radioSize = 20;
const circle = radioSize - 7;
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    height: radioSize,
    width: radioSize,
    borderRadius: radioSize / 2,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.6)',
  },
  circle: {
    height: circle,
    width: circle,
    borderRadius: circle / 2,
    backgroundColor: DARK_COLORS.BLUE['#1DA1F2'],
  },
  txt: {
    lineHeight: radioSize,
    paddingLeft: 10,
  },
  txtStrike: {
    textDecorationLine: 'line-through',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancel: {
    fontSize: 10,
  },
});
