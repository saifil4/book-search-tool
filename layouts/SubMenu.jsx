'use client'
import React from 'react';
import Pagination from '../components/Pagination';
import Sort from '../components/Sort';

const SubMenu = ({ sort, totalPages, currentPage, disabled }) => {

    return (
        <div className='submenu'>
            <Sort sort={sort} disabled={disabled}/>
            <Pagination totalPages={totalPages} currentPage={currentPage} disabled={disabled} />
        </div>
    )
}

export default SubMenu