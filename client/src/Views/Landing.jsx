import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.styles.css'
import imagen from '../public/platodepasta.jpg'





const Landing = () => {




  return (
    <main className='landingcontainer'>
      <section className='card'>
        <section className='containerimage'>
          <img src={imagen} alt="imagen" className='imagen' />
        </section>
        <section className='containertext'>
          <h1 className='title'>Welcome!</h1>
          <p className='resume'>On this page you can see different types of recipes with images, name of the dishes, step-by-step preparation method.</p>
          <p className='text'>Welcome to my PI foods from HENRY's bootcamp</p>
          <Link to='/home' >
            <button className='getin' type="button">Home</button>
          </Link>
        </section>
      </section>
    </main>
  )
}

export default Landing