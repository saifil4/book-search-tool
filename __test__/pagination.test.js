
import React from 'react';
import { render } from '@testing-library/react';
import Pagination from '@/components/Pagination';

describe('Pagination component', () => {
    it('check if correct page is selected', () => {
        const props = {
            totalPages: 10,
            currentPage: 1,
            disabled: false,
            handleChange: jest.fn()
        }
        const { getAllByTestId } = render(<Pagination {...props} />);
        const options = getAllByTestId('page-option')
        const selectedOption = options.find(option => option.selected);
        expect(selectedOption.innerHTML).toBe('1');
    });

    it('check if all pages are listed', () => {
        const props = {
            totalPages: 10,
            currentPage: 1,
            disabled: false,
            handleChange: jest.fn()
        }
        const { getByText } = render(<Pagination {...props} />);
        for (let i = 1; i <= props.totalPages; i++) {
            expect(getByText(i).innerHTML).toBe(`${i}`);
        }
    });

    it('check if select is disabled', () => {
        const props = {
            totalPages: 10,
            currentPage: 1,
            disabled: true,
            handleChange: jest.fn()
        }
        const { getByTestId } = render(<Pagination {...props} />);
        const select = getByTestId('page-selector');
        expect(select.disabled).toBe(true);
    });

});
