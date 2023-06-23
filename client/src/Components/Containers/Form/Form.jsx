import React, { useState, useEffect } from 'react'
import './Form.styles.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import validation from './validation'
import { useHistory } from "react-router-dom";




const Form = () => {
  const diets = useSelector(state => state.diets)
  const history = useHistory();


  const [form, setForm] = useState({
    nombre: "",
    image: "https://img.freepik.com/vector-premium/icono-foto-o-camara-aislado-sobre-fondo-blanco-ilustracion-vectorial_736051-267.jpg",
    summary: "",
    Healthscore: "0",
    steps: [],
    typediet: [],
  })

  const [errors, setError] = useState({
    nombre: "",
    image: "",
    summary: "",
    Healthscore: "",
    steps: "",
    typediet: "",
  })

  const changehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value })
    const validationform = validation({ ...form, [name]: value })
    if (validation)
      setError(validationform)
    else setError('')
  }

  const changehandlerdiets = (event) => {
    const { value, checked } = event.target;
    const updatedDiets = [...form.typediet];
    if (value) {
      updatedDiets.push(value);
    } else {
      updatedDiets = []
    }

    setForm({ ...form, typediet: updatedDiets });
    setError(validation({ ...form, typediet: updatedDiets }))
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const updatedDiets = [...form.typediet];
    if (Object.entries(form).length) {
      const response =await axios.post('http://localhost:3001/recipes',form)
      alert("se mandaron los datos ")
      history.push("/home"); // Redireccionar a la página "/home"
    }else{
      setError(validation({ ...errors}))
    }    
  }

  const handleStepsChange = (event) => {
    const { value } = event.target;
    const stepsArray = value.split('\n').map((step, index) => ({
      number: index + 1,
      step: step.trim()
    }));
    console.log(stepsArray);
    setForm((prevForm) => ({ ...prevForm, steps: stepsArray }));
  };


  return (
    <section className='formcontainer'>
      <h1>Crea tu Receta</h1>
      <form className='form' onSubmit={handleOnSubmit}>

        <div>
          <label >Nombre</label>
          <input
            value={form.nombre}
            onChange={changehandler}
            name='nombre'
            placeholder='Webito con Jamon'
          />
          <p>{errors.nombre}</p>
        </div>

        <div>
          <label >Imagen</label>
          <input
            type="text"
            value={form.image}
            onChange={changehandler}
            name='image'
            placeholder='http://tuimage.jpg'
          />
          <p>{errors.image}</p>
        </div>

        <div>
          <label >Resumen del Plato</label>
          <textarea
            rows="5"
            cols="20"
            type="text"
            value={form.summary}
            onChange={changehandler}
            name='summary'
            placeholder='Rico webito con jamon para toda la familia.......'
          />
          <span>{errors.summary}</span>
        </div>

        <div>
          <label >Healthscore</label>
          <input
            type="number"
            min="10" max="100"
            value={form.Healthscore}
            onChange={changehandler}
            name='Healthscore'
            placeholder='85'
          />
          <span>{errors.Healthscore}</span>
        </div>

        <div>
          <label >paso a paso</label>
          <textarea
            rows="5"
            cols="20"
            type="text"
            value={form.steps.map(step => step.step).join('\n')}
            onChange={handleStepsChange}
            name='steps'
            placeholder='1: Ponemos una sarten a calantar ......'
            required
          />
          <span>{errors.steps}</span>
        </div>

        <div>
          <h1>Diets</h1>
          <div>
            {
              diets?.map((diet, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name={diet}
                    value={diet}
                    id={index}
                    onChange={changehandlerdiets}
                    checked={form.typediet.includes(diet)}
                  />
                  <label htmlFor={diet}>{diet}</label>
                  <span>{errors.typediet}</span>
                </div>
              ))
            }
            <div>
              <input
                type="radio"
                name="typediet"
                value={[]}
                id="none"
                onChange={changehandler}
                checked={form.typediet.length === 0}
              />
              <label htmlFor="none">Ninguna</label>
            </div>
          </div>
        </div>
        <section>
        <button disabled={Object.values(errors).some((error) => error) }>Crear</button>
      </section>
      </form>
      


    </section>
  )
}

export default Form