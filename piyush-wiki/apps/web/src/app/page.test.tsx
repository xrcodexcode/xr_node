import { render, screen } from '@testing-library/react';
import HomePage from './page';
import { describe, it, expect } from 'vitest';

describe('HomePage Foundation', () => {
  it('renders system status banner', () => {
    render(<HomePage />);
    expect(screen.getByText('Piyush Wiki Engine')).toBeDefined();
    expect(screen.getByText('System Foundation Active')).toBeDefined();
  });
});
