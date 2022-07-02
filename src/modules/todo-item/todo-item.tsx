import React, {useState} from 'react';
import {TodoItemTemplate} from './todo-item.template';
import {TodoItemType} from './todo-item.type';
import {TodoItemPropsInterface} from './todo-item-props.interface';

export function TodoItem(props: TodoItemPropsInterface) {
  const [item, setItem] = useState(props.item);

  const toggleItem = () => {
    setItem((prev: TodoItemType) => ({...prev, isCanceled: !item.isCanceled}));
  };

  return (
    <TodoItemTemplate
      item={item}
      toggleItem={toggleItem}
      cancel={props.cancel}
    />
  );
}
