
import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
    // Define the test case
    it('renders the card with the given data', () => {
        // Define the dummy data to be passed to the component
        const data = {
            title: 'Test Book',
            author: 'Test Author',
            cover_i: null,
        };

        // Render the component with the dummy data
        const { getByText, getByAltText } = render(<Card data={data} />);

        // Assert that the component is correctly rendered with the given data
        expect(getByText('Test Book')).toBeInTheDocument();
        expect(getByText('Test Author')).toBeInTheDocument();
        expect(getByAltText('Test Book')).toHaveAttribute('src', 'https://example.com/test.jpg');
        expect(getByText('This is a test book.')).toBeInTheDocument();
    });
});
