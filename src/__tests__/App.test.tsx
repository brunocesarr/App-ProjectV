import 'react-native';
import React from 'react';
import App from '../../App';

import {render} from '@testing-library/react-native';

// Setup mocks outside describe and it functions
jest.mock('react-navigation', () => ({
  NavigationEvents: 'mockNavigationEvents',
  withNavigation: (component: any) => component,
}));

it('renders correctly', () => {
  //#region Setup
  const app = render(<App />);
  //#endregion

  //#region Act
  const textHome = app.getByText(/Project V/i);
  //#endregion

  //#region Asserts
  expect(textHome).toBeTruthy();
  //#endregion
});
