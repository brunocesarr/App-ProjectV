import 'react-native';
import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import {Button} from '../../components';

jest.useFakeTimers();

describe("Button", () => {
  it('renders correctly', () => {
    //#region Setup
    const onPress = jest.fn();
    const titleButton = 'Test Button';
    const button = render(<Button title={titleButton} onPress={onPress} />);
    //#endregion
  
    //#region Act
    const testButton = button.getByText(/Test Button/i);
    //#endregion
  
    //#region Asserts
    expect(testButton).toBeTruthy();
    //#endregion
  });
  
  it('on press button correctly', () => {
    //#region Setup
    const onPress = jest.fn();
    const titleButton = 'Test Button';
    const button = render(<Button title={titleButton} onPress={onPress} />);
    //#endregion
  
    //#region Act
    const testButton = button.getByText(/Test Button/i);
    fireEvent.press(testButton);
    //#endregion
  
    //#region Asserts
    expect(onPress).toBeCalled();
    expect(onPress).toBeCalledTimes(1);
    //#endregion
  });
});