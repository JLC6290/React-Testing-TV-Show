import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';




test("render episode component", () => {
    const { queryByTestId } = render(<Episodes episodes={[]}/>);
    const element = queryByTestId(/episode-container/i);
    expect(element).toBeVisible();
    expect(element.childNodes).toHaveLength(0);

})
