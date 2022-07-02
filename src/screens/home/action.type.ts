import {TodoItemType} from '../../modules/todo-item/todo-item.type';

export type HomeActionType =
  | {
      type: 'ITEMS';
      payload: TodoItemType[];
    }
  | {
      type: 'ADD_ITEM';
      payload: TodoItemType;
    }
  | {
      type: 'CHANGE_TXT';
      payload: string;
    }
  | {
      type: 'REMOVE_ITEM';
      payload: number | string;
    };
