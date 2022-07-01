import {TodoItemPropsInterface} from './todo-item-props.interface';

export interface TodoItemTemplatePropsInterface extends TodoItemPropsInterface {
  toggleItem: () => void;
}
