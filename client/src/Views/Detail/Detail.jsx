import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import archivos from '../../archivosjson/archivos.json'
import './Detail.styles.css'
import TextRenderer from '../../Components/Containers/TextRenderer/TextRenderer'
import { useDispatch, useSelector } from 'react-redux'
import { infoId } from '../../Redux/Actions'




const Detail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()//traemos el parametro (id)
  const data = useSelector(state => state.idrecipe)
  useEffect(() => {
    dispatch(infoId(id))
  }, [dispatch])
  



  return (
    <div className='Detail'>

      {
        data.map((recipe) => (
          <div key={recipe.id} className='DetailContainer'>

            <section className='Container__image'>
              <img src={recipe.image} alt="" />
            </section>
            <section className='Container__Text'>

              <h1><em>{recipe.nombre}</em></h1>
              <h4><em>HealthScore :</em> {recipe.healthscore}</h4>
              <h4><em>steps</em></h4>
              {recipe.steps.map((step) => (
                <ul key={step.number} className='Container__Steps'>
                  <li type='none'>
                    {step.number}:
                  </li>
                  <li type='none'>{step.step}</li>
                </ul>
              ))}
              <h4><em>Summary</em></h4>
              <TextRenderer text={recipe.summary} />
            </section>
            <Link className="container__button" to={'/home'}>
              <button>home</button>
            </Link>
            <section className='Container__diets'>
              <h3>Diets:</h3>
              {recipe.typediet.map((diet, index) => (
                <h3 key={index}>{diet}</h3>
              ))}

            </section>

          </div>
        ))
      }


    </div >
  )
}

export default Detail