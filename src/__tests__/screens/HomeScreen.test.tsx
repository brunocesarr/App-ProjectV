import 'react-native';
import React from 'react';

import {render} from '@testing-library/react-native';
import {HomeScreen} from '../../screens';

describe('Home Screen', () => {
  it('renders correctly', async () => {
    //#region Setup
    const titleHome = 'Home';
    const section = render(<HomeScreen />);
    //#endregion

    //#region Act
    const testHomeScreen = section.getByText(titleHome);
    //#endregion

    //#region Asserts
    expect(testHomeScreen).toBeTruthy();
    //#endregion
  });
});
