'use client';
import React from 'react';
import styles from './text-input.module.css';

const TextInput = (props) => {

    return (
        <>
            <input type='text' className={styles.searchInput} {...props} />
        </>

    )
}

export default TextInput