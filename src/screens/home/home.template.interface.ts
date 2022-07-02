import {ForwardedRef} from 'react';
import {TextInput} from 'react-native';
import {TodoItemType} from '../../modules/todo-item/todo-item.type';

export interface HomeTemplatePropsInterface {
  title: string;
  items: TodoItemType[];
  addItem: () => void;
  cancelItem: (id: number | string) => void;
  changeTxt: (txt: string) => string;
  inputRef: ForwardedRef<TextInput | null>;
}
