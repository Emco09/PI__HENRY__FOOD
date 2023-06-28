import React from 'react'
import './Card.style.css'
import { Link } from 'react-router-dom'// impoortamos el link para que ns lleve a la ruta deseada

//se destructura las props que llegan y se procede a renderizar los datos
const Card = ({ id, nombre, image, typediet }) => {
  return (
    <Link to={`/detail/${id}`} className='cardconteiner'>

      <section className='card__image'>
        <img src={image} alt="food" />
      </section>
      <section className='card__text'>
        <h3 >{nombre}</h3>
        <section >
          <h3>Diet Type</h3>
          {
            //se mapea la diet, ya que llega comoo un array y se enlista
            typediet.map((diet) => (
              <ul className='list'>
                <li key={id} type='none' >
                  {diet}
                </li>
              </ul>
            ))
          }
        </section>
      </section>
    </Link>
  )
}

export default Card