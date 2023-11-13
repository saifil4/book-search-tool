'use client'
import React from 'react';
import Pagination from '../components/Pagination';
import Sort from '../components/Sort';

const SubMenu = ({ sort, totalPages, currentPage }) => {

    return (
        <div className='submenu'>
            <Sort sort={sort}/>
            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
    )
}

export default SubMenu