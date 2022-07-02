import {HomeActionType} from './action.type';
import {HomeStateType} from './state.type';

export const homeReducer = (state: HomeStateType, action: HomeActionType) => {
  switch (action.type) {
    case 'ITEMS':
      return {...state, items: action.payload};
    case 'ADD_ITEM':
      if (action.payload.title) {
        return {...state, txt: '', items: [action.payload, ...state.items]};
      } else {
        return state;
      }
    case 'CHANGE_TXT':
      return {...state, txt: action.payload};
    case 'REMOVE_ITEM':
      const items = state.items.filter(item => item.key !== action.payload);
      return {...state, items};
    default:
      return state;
  }
};
