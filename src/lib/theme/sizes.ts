import {Dimensions} from 'react-native';

export const hp = (ratio: number | string) =>
  Dimensions.get('window').height * (Number(ratio) / 100);
export const wp = (ratio: number | string) =>
  Dimensions.get('window').width * (Number(ratio) / 100);
