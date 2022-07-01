import React from 'react';
import {render} from '@testing-library/react-native';
import {AppTextTemplate} from './app-text.template';

describe('App Text Template', () => {
  test('if the title is rendered correctly in the AppHeaderTemplate', async () => {
    const {getByText} = render(<AppTextTemplate>test</AppTextTemplate>);
    expect(getByText('test')).toBeDefined();
  });
});
