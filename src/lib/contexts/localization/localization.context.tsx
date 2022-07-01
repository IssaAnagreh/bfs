import {createContext} from 'react';
import {LocalizationContextType} from './localization.context.type';

export const LocalizationContext = createContext<LocalizationContextType>({
  t: () => '',
});
