## How long did you spend on the coding assignment? 
Spent around 16 hours on the assignment

## What would you add to your solution if you had more time?
Following is rough list of features and practices that i would include
1. Add more detailed tests
2. Add a filter to exlude cards with no cover imagewhich could improve the quality of results presented.
3. Allow user to toggle more fields like links to other websites etc.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
    
1. Pagination
    
    'use client'
    import React from 'react';
    import { useRouter, useSearchParams } from 'next/navigation';
    const Pagination = ({ totalPages, currentPage, disabled }) => {

        const router = useRouter();
        const searchParams = useSearchParams();

        let pages = [];
        for (let i = 1; i <= totalPages; i++) pages.push(i);

        const handleChange = (e) => {
            const pageValue = e.target.value;
            const params = new URLSearchParams(searchParams)
            params.set('page', pageValue)
            router.push('/' + '?' + params.toString())
        }

        return (
            <div>
                <label htmlFor="page-selector">Go to page</label>
                <select disabled={disabled} className='base-input sort' id="page-selector" onChange={handleChange} value={currentPage}>
                    {pages.map((page) => (
                        <option key={page} value={page}>{page}</option>
                    ))}
                </select>
            </div>
        )
    }
    export default Pagination

2. Query Params, so that on refresh the search results still stay and url could be shared with others as is.

        export default async function Home({ searchParams }) {
            const { search = null, page = 1, sort = "title" } = searchParams;
            const data = search ? await getData(search, page, sort) : {}


##	How would you track down a page performance issue in production? Have you ever had to do this?
There are multiple things you can check to counter performannce issues.
1. Check network tab in dev tools and look for assets that might be taking more time to load.

## How would you improve the API that you just used?
1. Imporve documentation. Maybe implement something like swagger.
2. Better pagination support
3. Better structured query.

## Please describe yourself using correctly formatted JSON.
        {
            name: "Saifil Momin",
            profession: "Software Developer",
            description: "Hello, I'm a Frontend Developer, basically the digital wizard crafting web magic on the internet. I wield React, TypeScript, Next JS, and a bunch of other tech spells to create web applications so user-friendly, they practically invite you to tea.",
        }
