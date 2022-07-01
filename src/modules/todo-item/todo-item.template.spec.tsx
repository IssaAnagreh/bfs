import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TodoItemTemplate} from './todo-item.template';

describe('Todo Item Template', () => {
  test('if the title is rendered correctly', async () => {
    const {getByText} = render(
      <TodoItemTemplate
        toggleItem={() => {}}
        item={{title: 'test title', isCanceled: false, key: 0}}
      />,
    );
    expect(getByText('test title')).toBeDefined();
  });

  test('if todoItem is calling toggleItem on pressing', () => {
    const mock = jest.fn();
    const {getByTestId} = render(
      <TodoItemTemplate
        toggleItem={mock}
        item={{title: 'test title', isCanceled: false, key: 0}}
      />,
    );
    fireEvent.press(getByTestId('todo-item'));
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
