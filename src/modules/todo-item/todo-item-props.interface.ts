import {TodoItemType} from './todo-item.type';

export interface TodoItemPropsInterface {
  item: TodoItemType;
  cancel: (id: string | number) => void;
}
