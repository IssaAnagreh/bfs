import React from 'react';
import {render} from '@testing-library/react-native';
import {AppHeaderTemplate} from './app-header.template';

describe('App Header Template', () => {
  test('if the title is rendered correctly in the AppHeaderTemplate', async () => {
    const {getByText} = render(<AppHeaderTemplate title="test" />);
    expect(getByText('test')).toBeDefined();
  });
});
