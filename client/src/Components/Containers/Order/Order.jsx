import React from 'react'
import { useDispatch } from 'react-redux'
import { filterCards, sortCards, healtCards, infoApiDb } from '../../../Redux/Actions.js'
import './Order.style.css'

const Order = () => {
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(sortCards(event.target.value))
    }

    const handlerHealt = (event) => {
        dispatch(healtCards(event.target.value))
    }
    const handlerApiDb = (event) => {
        dispatch(infoApiDb(event.target.value))
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