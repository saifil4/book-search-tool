import React from 'react';
import TextInput from '../components/text-input';
import Button from '../components/button';

const SearchSection = ({ handleChange, searchValue, handleClick }) => {
    return (
        <div className='search-container'>
            <h1>Find your next book to read</h1>
            <div>
                <TextInput onChange={handleChange} value={searchValue} />
                <Button onClick={handleClick}>Search</Button>
            </div>
        </div>
    )
}

export default SearchSection