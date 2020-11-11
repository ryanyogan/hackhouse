import React from 'react';
import { render } from '@testing-library/react';

import Listings from './listings';

describe('Listings', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Listings />);
    expect(baseElement).toBeTruthy();
  });
});
