import {
  render,
} from '@testing-library/react';
import App from './App';
window.URL.createObjectURL = function() {};
test('renders learn react link', () => {
  render( <App /> );
  
});
