import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCocktails } from '../../redux/features/cocktailSlice'
import CocktailCard from '../CocktailCard/CocktailCard';
import './CocktailList.css'

const CocktailList = () => {
    const {cocktails, loading} = useSelector((state) => ({...state.app}));
    const dispatch = useDispatch();
    const [modifiedCocktail, setModifiedCocktail] = useState([]);

    useEffect(() => {
        dispatch(fetchCocktails());
    }, [])

    useEffect(() => {
        if (cocktails) {
            const newCocktails = cocktails.map((item) => {
                const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass
                }
            })
            setModifiedCocktail(newCocktails)
        }
    }, [cocktails])

    if (!cocktails) {
        return <h1 className='search-failed'>No cocktails matched your search</h1>
    }

    return (
        <div className='cocktail-list-container'>
            {loading ? 
            <img src='https://www.sharlenecalzature.it/wp-content/uploads/2020/09/load4.gif' alt='Loading'/> 
            : null}
            <div className="cocktail-list-cards">
                {!loading ? modifiedCocktail.map((item) => {
                    return <CocktailCard key={item.id} cocktail={item} />
                }) : null}
            </div>
        </div>
    )
}

export default CocktailList