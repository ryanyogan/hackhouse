import React from 'react';
import { render } from '@testing-library/react';

import ClientUiSections from './client-ui-sections';

describe('ClientUiSections', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientUiSections />);
    expect(baseElement).toBeTruthy();
  });
});
