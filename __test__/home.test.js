import { render, screen } from '@testing-library/react';


it('should render the heading', () => {
    render(<h1>My page</h1>)
    const heading = screen.getByRole('heading', { name: 'My page' })
    expect(heading).toBeInTheDocument()
})