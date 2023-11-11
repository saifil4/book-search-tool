import React from 'react';
import TextInput from '../components/text-input';
import Button from '../components/button';
import { SORT_OPTIONS } from '../constants';


const SearchSection = ({ handleChange, searchValue, handleClick, handleSort }) => {
    return (
        <div className='search-container'>
            <h1>Find your next book to read</h1>
            <div className='input-container'>
                <TextInput placeholder="Search for books(eg. harry potter)" onChange={handleChange} value={searchValue} />
                <Button onClick={handleClick}>Search</Button>
                <label>Sort by</label>
                <select onChange={handleSort}>
                    <option value={SORT_OPTIONS.DEFAULT}>Default</option>
                    <option value={SORT_OPTIONS.A_TO_Z}>Title A-Z</option>
                    <option value={SORT_OPTIONS.Z_TO_A}>Title Z-A</option>
                    <option value={SORT_OPTIONS.LATEST}>Latest Published</option>
                    <option value={SORT_OPTIONS.OLDEST}>Oldest Published</option>
                </select>
            </div>
        </div>
    )
}

export default SearchSection