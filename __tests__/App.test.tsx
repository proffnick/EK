import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

// Check if the app renders correctly
describe('App Component', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});


