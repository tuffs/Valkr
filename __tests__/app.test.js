import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from '../components/Title';

describe('VALKR Sanity Test', () => {
  it('displays the home page\'s Title', () => {
    render(<Title title='Title' subtitle='Subtitle' />);
    const title = screen.getByTestId('Title');
    expect(title).toBeInTheDocument();
  });
});