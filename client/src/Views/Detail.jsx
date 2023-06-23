import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import archivos from '../archivosjson/archivos.json'
import './Detail.styles.css'
import TextRenderer from '../Components/Containers/TextRenderer/TextRenderer'
import { useDispatch, useSelector } from 'react-redux'
import { infoId } from '../Redux/Actions'




const Detail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()//traemos el parametro (id)
  const data = useSelector(state => state.idrecipe)
  useEffect(() => {
    dispatch(infoId(id))
  }, [])
  console.log(data);



  return (
    <div className='Detail'>

      {
        data.map((recipe) => (
          <div className='DetailContainer'>
            
              <section className='Container__image'>
                <img src={recipe.image} alt="" />
              </section>
              <section className='Container__Text'>
                <h1>Noombre</h1>
                <h2>{recipe.nombre}</h2>
                <h1>HealthScore</h1>
                <h2>{recipe.healthscore}</h2>
                <h1>steps</h1>
                {recipe.steps.map((step) => (
                  <ul className='Container__Steps'>
                    <li type='none'>
                      {step.number}:
                    </li>
                    <li type='none'>{step.step}</li>
                  </ul>
                ))}
              </section>
              <section className='Container__diets'>
                <h3>Diets:</h3>
                {recipe.typediet.map((diet) => (
                  <h3>{diet}</h3>
                ))}
                
              </section>
              <section>
                <h4>Summary</h4>
                <TextRenderer text={recipe.summary} />
              </section>
              <Link to={'/home'}>
                <button>home</button>
                </Link>
          </div>
        ))
      }


    </div >
  )
}

export default Detail