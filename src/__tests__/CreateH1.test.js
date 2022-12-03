import React from 'react';
import { render } from '@testing-library/react';
import CreateH1 from '../components/CreateH1';

describe('test the rendering of createh1 function', () => {
  test('Render createh1 elements on page', () => {
    const display = render(
      <React.StrictMode>
        <CreateH1 />
      </React.StrictMode>,
    );
    expect(display).toMatchSnapshot();
  });
});
