import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {AddNewTodoTemplate} from './add-new-todo.template';

describe('Add New Todo Template', () => {
  test('if input is firing changeText event correctly', () => {
    const mock = jest.fn();
    const {getByTestId} = render(<AddNewTodoTemplate onChangeTxt={mock} />);
    fireEvent.changeText(getByTestId('input'), 'test');
    expect(mock).toHaveBeenCalledWith('test');
  });
});
