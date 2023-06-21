import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import archivos from '../archivosjson/archivos.json'
import './Detail.styles.css'
import TextRenderer from '../Components/Containers/TextRenderer/TextRenderer'




const Detail = () => {
  const { id } = useParams()//traemos el parametro (id)
  const [state, setState] = useState({}) // iniciamoos un estad local 
  /*   useEffect(async ()=>{
      const data =(await axios(`http://localhost:3001/recipes/${id}`)).data
      const response=setState(data)
    
    },[]) */

  const { image, nombre, summary, healtscore, steps, typediet } = archivos
  return (
    <div className='Detail'>
      <div className='DetailContainer'>
        <section className='Container__image'>
          <img src="https://spoonacular.com/recipeImages/782585-312x231.jpg" alt="food" />
        </section>
        <section className='Container__Text'>
          <h1>{nombre}</h1>
          <h2>healtscore {healtscore}</h2>
          <h3>steps</h3>
          {steps.map((step) => (
            <ul className='Container__Steps'>
              <li type='none'>
                {step.number}:
              </li>
              <li type='none'>{step.step}</li>
            </ul>
          ))}
          <section className='Container__diets'>
            <h3>Diets:</h3>
            {typediet.map((diet) => (
              <h3>{diet}</h3>
            ))}
          </section>
          <h4>Summary</h4>
          <TextRenderer text={summary}/> 

        </section>

      </div>
    </div>
  )
}

export default Detail