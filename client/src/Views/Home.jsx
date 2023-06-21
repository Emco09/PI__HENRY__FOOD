import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Cards from '../Components/Containers/Cards/Cards'
import Paginado from '../Components/Containers/Paginado/Paginado'
import NavBar from '../Components/Presentacionales/NavBar/NavBar'
import { useLocation } from 'react-router-dom'
import { getDiets, getRecipes } from '../Redux/Actions'



const Home = () => {
  const data = useSelector(state=>state.recipes)//seleccionamoos el estado deseado 
  const [currentPage,setCurrentPage] = useState(1)
  const [recipesPerPage,setRecipesPerPage]=useState(9);
  const indexOfLastRecipe = currentPage*recipesPerPage;
  const indexOfFirstRecipe =indexOfLastRecipe - recipesPerPage;
  const currentRecipes=data.slice(indexOfFirstRecipe,indexOfLastRecipe);
  const location = useLocation();
  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipes())
    dispatch(getDiets())

  }, [dispatch])
  
  
  
  
  
   const paginado=(pageNumber)=>{
        
    setCurrentPage(pageNumber)
}; 

  

  

  return (
    <section className='homecontainer'>
       {/*  {
          location.pathname !== '/'
          ? 
          : null
        } */}
        <NavBar/>
        <Cards
        data={currentRecipes}
        /> 
        <Paginado
        data={data}
        recipesPerPage={recipesPerPage}
        paginado={paginado}
        />
        
      
    </section>


  )
}

export default Home