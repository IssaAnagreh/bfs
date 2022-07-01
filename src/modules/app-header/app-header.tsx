import React from 'react';
import {AppHeaderTemplate} from './app-header.template';
import {AppHeaderPropsInterface} from './app-header-props.interface';

export function AppHeader(props: AppHeaderPropsInterface) {
  return <AppHeaderTemplate {...props} />;
}
