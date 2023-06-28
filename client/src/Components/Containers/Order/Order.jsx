import React from 'react'
import { useDispatch } from 'react-redux'
import { sortCards, healtCards } from '../../../Redux/Actions.js'
import './Order.style.css'




const Order = ({setCurrentPage}) => {
       const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(sortCards(event.target.value))
        setCurrentPage(1)
    }

    const handlerHealt = (event) => {
        dispatch(healtCards(event.target.value))
        setCurrentPage(1)
    }




    return (

        <section className='sectionContainer'>

            <select onChange={handleOrder}>
                <option selected disabled>Order</option>
                <option value="A">A to Z</option>
                <option value="Z">Z to A</option>
            </select>

            <select onChange={handlerHealt}>
                <option selected disabled>Healt Score</option>
                <option value="min">min</option>
                <option value="max">max</option>
            </select>

        </section>
    )
}

export default Order