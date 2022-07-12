import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearchCocktail } from '../../redux/features/cocktailSlice';
import './SearchInput.css'

const SearchInput = () => {
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(fetchSearchCocktail(event.target.value))
    }
    return (
        <section className='search-input-container'>
            <label htmlFor='cocktail'>Find your favorite cocktail:</label>
            <input name='cocktail' id='cocktail' placeholder='Cocktails' onChange={handleChange}/>
        </section>
    )
}

export default SearchInput