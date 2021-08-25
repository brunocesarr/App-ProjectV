import 'react-native';
import React from 'react';

import {render} from '@testing-library/react-native';
import {Section} from '../../components';

jest.useFakeTimers();

describe('Section Component', () => {
  it('renders correctly', async () => {
    //#region Setup
    const titleSection = 'Test Button';
    const section = render(<Section title={titleSection} />);
    //#endregion

    //#region Act
    const testSection = section.getByText(titleSection);
    //#endregion

    //#region Asserts
    expect(testSection).toBeTruthy();
    //#endregion
  });
});
