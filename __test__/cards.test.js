

import React from 'react';
import { render } from '@testing-library/react';
import CardList from '@/layouts/CardList';

describe('Card List Component', () => {
    it('Check if all books are rendered', () => {
        const books = [
            {
                title: "Book 1",
                cover_i: "cover1.jpg",
                first_publish_year: 2001,
                author_name: "Author 1"
            },
            {
                title: "Book 2",
                cover_i: "cover2.jpg",
                first_publish_year: 2002,
                author_name: "Author 2"
            },
            {
                title: "Book 3",
                cover_i: "cover3.jpg",
                first_publish_year: 2003,
                author_name: "Author 3"
            }
        ];
        const { getAllByTestId } = render(<CardList bookList={books} />);
        const bookElements = getAllByTestId('book-item');
        for (let i = 0; i < books.length; i++) {
            const element = bookElements[i];
            const title = element.querySelector('h4');
            expect(title.innerHTML).toContain(books[i].title);
        }
    });

});
