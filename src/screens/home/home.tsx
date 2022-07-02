import React, {useContext, useEffect, useReducer, useRef} from 'react';
import {LayoutAnimation} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {LocalizationContext} from '../../lib/contexts/localization/localization.context';
import {HomeTemplate} from './home.template';
import {homeCustomData} from './home-custom-data';
import {homeInitialState} from './initial.state';
import {homeReducer} from './reducer';

export function Home() {
  const {t} = useContext(LocalizationContext);
  const [state, dispatch] = useReducer(homeReducer, homeInitialState);
  const inputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    dispatch({
      type: 'ITEMS',
      payload: homeCustomData,
    });
  }, []);

  const addItem = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        title: state.txt,
        isCanceled: false,
        key: Math.random() * 99999,
      },
    });
    inputRef.current?.clear?.();
  };

  const cancelItem = (id: number | string) => {
    LayoutAnimation.easeInEaseOut();
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  const changeTxt = (txt: string) => {
    dispatch({
      type: 'CHANGE_TXT',
      payload: txt,
    });
    return txt;
  };

  return (
    <HomeTemplate
      title={t('app.title')}
      items={state.items}
      addItem={addItem}
      cancelItem={cancelItem}
      changeTxt={changeTxt}
      inputRef={inputRef}
    />
  );
}
