import {HomeActionType} from './action.type';
import {HomeStateType} from './state.type';

export const homeReducer = (state: HomeStateType, action: HomeActionType) => {
  switch (action.type) {
    case 'ITEMS':
      return {...state, items: action.payload};
    case 'ADD_ITEM':
      return {...state, items: [action.payload, ...state.items]};
    case 'CHANGE_TXT':
      return {...state, txt: action.payload};
    default:
      return state;
  }
};
