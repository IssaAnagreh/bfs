import {ForwardedRef, ReactElement} from 'react';
import {TextInput, ViewStyle} from 'react-native';

export interface AddNewTodoPropsInterface {
  onChangeTxt: (txt: string) => string;
  containerStyle?: ViewStyle | ViewStyle[];
  style?: ViewStyle | ViewStyle[];
  left?: ReactElement;
  right?: ReactElement;
  ref: ForwardedRef<TextInput>;
}
