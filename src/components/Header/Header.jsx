import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <h1>{"Bar & Restaurant"}</h1>
        <figure className='header-logo'>
            <img src="https://img.freepik.com/premium-vector/country-music-bar-typography-logo-design_57043-420.jpg?w=996" alt='Cowboys Bar' />
        </figure>
        <h1>Redux Toolkit Test</h1>
    </div>
  )
}

export default Header