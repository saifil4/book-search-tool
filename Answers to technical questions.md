## How long did you spend on the coding assignment? 
Spent around 20 hours on the assignment

## What would you add to your solution if you had more time?
Following is rough list of features and practices that i would include
1. Add more detailed tests
2. Add a filter to exlude cards with no cover image which could improve the quality of results presented.
3. Allow user to toggle more fields like links to other websites etc.
4. Write better error and loading pages. currently it is very basic
5. Do more QA and handle more edge cases

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
    
1. Pagination
    
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
                >
                    {pages.map((page) => (
                        <option data-testid="page-option" key={page} value={page}>{page}</option>
                    ))}
                </select>
            </fieldset>
            )
        }

        export default Pagination

2. Query Params, so that on refresh the search results still stay and url could be shared with others as is.

        export default async function Home({ searchParams }) {
            const { search = null, page = 1, sort = "title" } = searchParams;
            const data = search ? await getData(search, page, sort) : {}


##	How would you track down a page performance issue in production? Have you ever had to do this?
There are multiple things you can check to track performannce issues.
1. Check network tab in dev tools and look for assets that might be taking more time to load.
2. Check performance tab in dev tools 
3. Check for any errors in console while might be causing the performance problems.

## How would you improve the API that you just used?
1. Imporve documentation. Maybe implement something like swagger.
2. Better pagination support

## Please describe yourself using correctly formatted JSON.
        {
            name: "Saifil Momin",
            profession: "Software Developer",
            description: "Hello, I'm a Frontend Developer, basically the digital wizard crafting web magic on the internet. I wield React, TypeScript, Next JS, and a bunch of other tech spells to create web applications so user-friendly, they practically invite you to tea.",
        }
