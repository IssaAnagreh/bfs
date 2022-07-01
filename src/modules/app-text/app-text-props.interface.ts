import {TextStyle} from 'react-native';

export interface AppTextPropsInterface extends TextStyle {
  children: string;
  style?: TextStyle | TextStyle[];
}
