import 'react-native';
import React from 'react';
import App from '../../App';

import {render} from '@testing-library/react-native';

describe('App', () => {
  it('renders correctly', () => {
    //#region Setup
    const app = render(<App />);
    //#endregion

    //#region Act
    const textHome = app.getByText(/Project V/);
    //#endregion

    //#region Asserts
    expect(textHome).toBeTruthy();
    //#endregion
  });
});
