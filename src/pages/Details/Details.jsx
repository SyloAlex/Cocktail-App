import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleCocktail } from '../../redux/features/cocktailSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Details.css'

const Details = () => {
  const {cocktail, loading} = useSelector((state) => ({...state.app}));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [id])

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        idDrink, 
        strDrink, 
        strDrinkThumb, 
        strAlcoholic, 
        strGlass, 
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      setIngredients([strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5])
      setModifiedCocktail({
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass,
                    instructions: strInstructions,
                })
    }
  }, [id, cocktail])
  return (
    <div className='details-container'>
        {loading ? 
        <img src='https://www.sharlenecalzature.it/wp-content/uploads/2020/09/load4.gif' alt='Loading'/> 
        : null}
        {modifiedCocktail && !loading ? 
        <div className="details-cocktail-info">
          <figure className="cocktail-image">
            <img src={modifiedCocktail.image} alt={modifiedCocktail.name} />
          </figure>
          <div className="cocktail-info">
            <div className="cocktail-info-title">
              <h1>{modifiedCocktail.name}</h1>
            </div>
            <div className="cocktail-info-info block-info">
              <h2>Information:</h2>
              <p><span>Type:</span> {modifiedCocktail.info}</p>
              <p><span>Glass:</span> {modifiedCocktail.glass}</p>
              <p><span>Instructions:</span> {modifiedCocktail.instructions}</p>
            </div>
            <div className="cocktail-info-ingredients block-info">
              <h2>Ingredients</h2>
              {ingredients.map((ingredient) => {
                if (ingredient){
                  return <p key={ingredient}>{ingredient}</p>
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div> 
        : null}
    </div>
  )
}

export default Details