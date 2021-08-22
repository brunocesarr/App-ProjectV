import 'react-native';
import React from 'react';
import App from '../../App';

import {render} from '@testing-library/react-native';

it('renders correctly', () => {
  //#region Setup
  const app = render(<App />);
  //#endregion

  //#region Act
  const textHome = app.getByText(/Olá/i);
  //#endregion

  //#region Asserts
  expect(textHome).toBeTruthy();
  //#endregion
});
