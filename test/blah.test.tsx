import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Thing } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = ReactDOM.createRoot(div);
    root.render(<Thing />);
    root.unmount();
  });
});
