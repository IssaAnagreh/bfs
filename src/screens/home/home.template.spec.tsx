import React from 'react';
import {render} from '@testing-library/react-native';
import {HomeTemplate} from './home.template';
import {homeCustomData} from './home-custom-data';

describe('Home Template', () => {
  test('if the title is rendered correctly', async () => {
    const {getByText} = render(
      <HomeTemplate
        title={'app.title'}
        items={homeCustomData}
        addItem={() => {}}
        changeTxt={(txt: string) => {
          return txt;
        }}
        inputRef={null}
      />,
    );

    expect(getByText('app.title')).toBeDefined();
  });
});
