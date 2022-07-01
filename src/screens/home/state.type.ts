import {TodoItemType} from '../../modules/todo-item/todo-item.type';

export type HomeStateType = {
  items: TodoItemType[];
  txt: string;
};
