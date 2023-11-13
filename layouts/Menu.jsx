'use client'
import React from 'react';
import Search from '@/components/Search';

const Menu = ({ search }) => {
    return (
        <div className='menu'>
            <Search search={search} />
        </div>
    )
}

export default Menu