import React from 'react';
import {render} from '@testing-library/react-native';
import {TodoItem} from './todo-item';
import {TodoItemTemplate} from './todo-item.template';

const TodoItemTemplateMock = TodoItemTemplate as jest.Mock;
jest.mock('./todo-item.template.tsx', () => {
  return {TodoItemTemplate: jest.fn().mockReturnValue(null)};
});

describe('Todo Item', () => {
  test('if the title is rendered correctly', async () => {
    render(
      <TodoItem
        item={{title: 'test title with mock', isCanceled: false, key: 0}}
      />,
    );
    const {item} = TodoItemTemplateMock.mock.calls[0][0];
    expect(item.title).toBe('test title with mock');
  });
});
