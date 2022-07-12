import React from 'react'
import CocktailList from '../components/CocktailList/CocktailList'
import SearchInput from '../components/SearchInput/SearchInput'
import './index.css'

const Home = () => {
  return (
    <div className='home-container'>
      <SearchInput />
      <CocktailList />
    </div>
  )
}

export default Home