import React, {ForwardedRef, forwardRef} from 'react';
import {TextInput} from 'react-native';
import {AddNewTodoPropsInterface} from './add-new-props.interface';
import {AddNewTodoTemplate} from './add-new-todo.template';

export const AddNewTodo = forwardRef(
  (props: AddNewTodoPropsInterface, ref: ForwardedRef<TextInput | null>) => {
    return <AddNewTodoTemplate {...props} ref={ref} />;
  },
);
