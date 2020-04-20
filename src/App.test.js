import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { fetchShows as mockFetchShows } from './api/fetchShow';

jest.mock('./api/fetchShows');
console.log("jest.mock run, mockFetchShows:", mockFetchShows);

test("", async () => {
    
})