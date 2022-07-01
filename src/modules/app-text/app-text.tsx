import React from 'react';
import {AppTextTemplate} from './app-text.template';
import {AppTextPropsInterface} from './app-text-props.interface';

export function AppText(props: AppTextPropsInterface) {
  return <AppTextTemplate {...props} />;
}
