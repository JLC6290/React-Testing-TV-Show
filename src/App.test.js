import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';

import * as rtl from '@testing-library/react';

describe('App', () => {
  let wrapper;

  afterEach(rtl.cleanup);
  beforeEach(() => {
    wrapper = rtl.render(<App />);
  });

  it('displays the correct name starting with the API data', async () => {
    const text = await wrapper.findByText('Select a season');
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });
});