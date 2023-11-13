'use client'
import React from 'react';

const Pagination = ({ totalPages, currentPage, disabled, handleChange }) => {

    let pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);


    return (
        <div>
            <label htmlFor="page-selector">Go to page</label>
            <select
                disabled={disabled}
                className='base-input sort'
                id="page-selector"
                data-testid="page-selector"
                onChange={handleChange}
                value={currentPage}
            >
                {pages.map((page) => (
                    <option data-testid="page-option" key={page} value={page}>{page}</option>
                ))}
            </select>
        </div>
    )
}

export default Pagination