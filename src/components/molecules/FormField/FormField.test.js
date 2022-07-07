import React from 'react';
import FormField from './FormField';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../../../helpers/renderWithProviders';


describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
