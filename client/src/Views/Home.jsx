// Este código representa el componente "Home" de la aplicación. Aquí tienes una explicación de su funcionamiento:
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../Components/Containers/Cards/Cards'
import Paginado from '../Components/Containers/Paginado/Paginado'
import NavBar from '../Components/Presentacionales/NavBar/NavBar'
import { useLocation } from 'react-router-dom'
import { getDiets, getRecipes } from '../Redux/Actions'



const Home = () => {
  const data = useSelector(state => state.recipes)// Para obtener el estado recipes del almacenamiento de Redux, que contiene la lista de recetas.
  const [currentPage, setCurrentPage] = useState(1)// Uiliza el estado local para controlar la paginación de las recetas. El estado currentPage representa la página actual y se inicializa en 1.
  const [recipesPerPage, setRecipesPerPage] = useState(9);//El estado recipesPerPage representa la cantidad de recetas que se muestran por página y se inicializa en 9.
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = data.slice(indexOfFirstRecipe, indexOfLastRecipe);// Cálculo de recetas actuales: Se calcula el índice de la última receta y el índice de la primera receta en función de la página actual y la cantidad de recetas por página. A partir de estos índices, se obtiene el subconjunto de recetas que se mostrarán en la página actual.
  const location = useLocation();


  const dispatch = useDispatch()
  //Efecto de carga inicial: El componente utiliza el hook useEffect para ejecutar ciertas acciones al cargar el componente. En este caso, se despachan las acciones getRecipes y getDiets utilizando la función dispatch. Estas acciones se encargan de obtener las recetas y los tipos de dieta desde el backend y almacenarlos en el estado de Redux.
  useEffect(() => {
    dispatch(getRecipes())
    dispatch(getDiets())
    console.log('soy la home');
  }, [dispatch])




  //El componente define una función llamada paginado que se utiliza para cambiar la página actual.ƒ
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  };




  //El componente Home renderiza el contenido de la página de inicio, que incluye el componente NavBar, el componente Cards que muestra las recetas actuales y el componente Paginado que muestra la paginación.
  return (
    <section className='homecontainer'>
      {/*  {
          location.pathname !== '/'
          ? 
          : null
        } */}
      <NavBar />
      <Cards
        data={currentRecipes}
      />
      <section className='home__paginado'>
      <Paginado
        data={data}
        recipesPerPage={recipesPerPage}
        paginado={paginado}
      />
      </section>
     


    </section>


  )
}

export default Home