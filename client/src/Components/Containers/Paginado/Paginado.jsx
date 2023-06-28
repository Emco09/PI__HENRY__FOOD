import React from 'react'
import style from './Paginado.style.css'

const Paginado = ({ data, recipesPerPage, paginado, currentPage, setCurrentPage, currentRecipes }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(data.length / recipesPerPage); i++) {
        pageNumber.push(i)
    }
    const prevpag = () => {
        setCurrentPage(currentPage - 1)
    }
    const nextpag = () => {
        setCurrentPage(currentPage + 1)
    }
    console.log(currentRecipes);

    return (


        <section className='paginado'>
            <button disabled={currentPage === 1} onClick={prevpag}>
                prev
            </button>
            <ul className='ulpaginado'>
                {
                    pageNumber?.map(number => (
                        <li key={number} className='numeros'>
                            <button  onClick={() => paginado(number)}> {number} </button>
                        </li>
                    ))
                }
            </ul>
            <button disabled={currentRecipes.length < 9} onClick={nextpag}>
                next
            </button>
        </section >


    )
}

export default Paginado