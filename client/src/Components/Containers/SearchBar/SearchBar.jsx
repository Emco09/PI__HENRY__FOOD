import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getName } from '../../../Redux/Actions'
import './SearchBar.style.css'




const Searchbar = () => {
  const [name, setName] = useState("")// creo estado donde se guardara el nombre escrito
  const dispatch = useDispatch()// para poder despachar la action requerida

  //se guarda el nombre en el estado (se setea)
  const handleInputChange = (event) => {
    setName(event.target.value)
  }

  //se ejecuta el dispatch donde se le declara la action a ejecutar pasandole el estado (nombre ingresado) 
  //se setea el estado en un string vacio 
  const OnSearch = (name) => {
    dispatch(getName(name))
    setName("")
  }


  return (

    <div className='container__Search'>
      <input type="search" placeholder='Search By Name Recipe....' value={name} onChange={handleInputChange}></input>
      <button  onClick={() => OnSearch(name)}>Search</button>
    </div>

  )
}

export default Searchbar