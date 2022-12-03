import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('test the rendering of the header elements', () => {
  test('Render header elements on page correctly', () => {
    const display = render(
      <React.StrictMode>
        <Header />
      </React.StrictMode>,
    );
    expect(display).toMatchSnapshot();
  });
});
