'use client'
import React from 'react';

const Pagination = ({ totalPages, currentPage, disabled, handleChange }) => {

    let pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);


    return (
        <fieldset disabled={disabled} data-testid="page-selector">
            <label htmlFor="page-selector">Go to page</label>
            <select
                value={currentPage}
                className='base-input sort'
                id="page-selector"
                onChange={handleChange}
                aria-label="Select a page"
            >
                {pages.map((page) => (
                    <option data-testid="page-option" key={page} value={page}>{page}</option>
                ))}
            </select>
        </fieldset>
    )
}

export default Pagination