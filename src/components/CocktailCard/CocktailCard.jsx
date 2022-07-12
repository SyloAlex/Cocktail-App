import React from 'react'
import { Link } from 'react-router-dom';
import './CocktailCard.css'

const CocktailCard = ({cocktail}) => {
    const {id, name, image} = cocktail;
    return (
        <div className='cocktail-card-container'>
            <h2>{name}</h2>
            <figure className='cocktail-card-figure'>
                <Link to={`/cocktail/${id}`}>
                    <img src={image} alt="Cocktail" />
                </Link>
            </figure>
        </div>
    )
}

export default CocktailCard