'use client';
import React from 'react'

const SearchInput = ({handleChange, searchValue}) => {

    return (
        <>
         <input type='text' value={searchValue} onChange={handleChange} />

        </>
       
    )
}

export default SearchInput