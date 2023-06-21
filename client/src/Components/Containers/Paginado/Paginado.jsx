import React from 'react'
import './Paginado.style.css'

const Paginado = ({data,recipesPerPage,paginado}) => {
        const pageNumber = [];
   for (let i = 1; i <=Math.ceil(data.length/recipesPerPage); i++) {    
    pageNumber.push(i)
   }
   

  return (
    
        
        <section className='paginado'>
            <ul >
                
                {
                    pageNumber?.map(number => (
                          <li key={number} className='numeros'>
                              <a onClick={() => paginado(number)}> {number} </a>
                          </li>
                      ))
                }
            </ul>
        </section>

    
  )
}

export default Paginado