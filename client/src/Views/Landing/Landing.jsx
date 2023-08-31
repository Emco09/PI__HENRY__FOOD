import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.styles.css'
import imagen from '../../public/platodepasta.jpg'





const Landing = () => {




  return (
    <main className='landingcontainer'>
      <section className='card'>
        <section className='containerimage'>
          <img className='containerimage' src={imagen} alt="imagen" />
        </section>
        <section className='containertext'>
          <h1 className='title'>Bienvenido!</h1>
          <p className='resume'>En esta página podrás ver diferentes tipos de recetas con imágenes, nombre de los platos, método de preparación paso a paso.</p>
          <p className='text'>Bienvenido a mi proyecto individual de Food del Bootcamp de Henry</p>
          <Link to='/home' >
            <button className='getin' type="button">Home</button>
          </Link>
        </section>
      </section>
    </main>
  )
}

export default Landing