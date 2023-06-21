import React from 'react'
import Card from '../../Presentacionales/Card/Card'
import './Cards.style.css'

const Cards = (props) => {
  const {data}=props //convierto las proops en un objeto
  
  return (
    <section className='cardscontainer'>
         {
          //se mapea la data (estado) para pasar la info al componente card (se destructura la data)
         data.map(({id,nombre,image,typediet})=>(
          <Card
            key={id}
            id={id}
            nombre={nombre}
            image={image}
            typediet={typediet}
          />
         ))
         }
    </section>
  )
}

export default Cards