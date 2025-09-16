import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';
import Title from '../components/Title';

describe('VALKR Sanity Test', () => {
  it('displays the home page\'s Title', () => {
    render(<Title title='Title' subtitle='Subtitle' />);
    const title = screen.getByTestId('Title');
    expect(title).toBeInTheDocument();
  });
});

describe('Home Component Test Suite', () => {
  it('renders the complete Home component structure properly', () => {
    render(<Home />);

    // Test that the main container exists
    const container = screen.getByTestId('main_container');
    expect(container).toBeInTheDocument();

    // Test that the Title component renders
    const titleComponent = screen.getByTestId('Title');
    expect(titleComponent).toBeInTheDocument();

    // Test specific content to ensure proper rendering
    expect(screen.getByText('VALKR')).toBeInTheDocument();
    expect(screen.getByText('Simple Toolsets for Rapid Next.js Development')).toBeInTheDocument();
  });
});