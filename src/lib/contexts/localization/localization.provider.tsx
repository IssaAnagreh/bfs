import React, {ReactNode, useMemo} from 'react';
import I18n from '../../locales';
import {LocalizationContext} from './localization.context';
import {LocalizationContextType} from './localization.context.type';

export const LocalizationProvider = (props: {children: ReactNode}) => {
  const localizationContextMemo = useMemo<LocalizationContextType>(
    () => ({
      t: (scope, options) => I18n.t(scope, {locale: I18n.locale, ...options}),
    }),
    [],
  );
  return (
    <LocalizationContext.Provider value={localizationContextMemo}>
      {props.children}
    </LocalizationContext.Provider>
  );
};
