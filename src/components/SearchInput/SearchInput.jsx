import React, { useRef } from 'react'
import './SearchInput.css'

const SearchInput = () => {
    const searchValue = useRef();
    return (
        <section className='search-input-container'>
            <label htmlFor='cocktail'>Find your favorite cocktail:</label>
            <input name='cocktail' id='cocktail' placeholder='Cocktails' ref={searchValue}/>
        </section>
    )
}

export default SearchInput