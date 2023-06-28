import React from 'react'
import { useDispatch } from 'react-redux'
import { infoApiDb, reset } from '../../../Redux/Actions'

const FilterInfo = ({ setCurrentPage }) => {
    const dispatch = useDispatch()

    const handlerApiDb = (event) => {
        dispatch(infoApiDb(event.target.value))
        setCurrentPage(1)
    }

    const handlerReset = () => {
        dispatch(reset())
        setCurrentPage(1)
    }

    return (
        <section>
            <select onChange={handlerApiDb} >
                <option selected disabled>Info</option>
                <option value="api">Api</option>
                <option value="db">Db</option>
            </select>
            <button onClick={handlerReset}>
                RESET
            </button>
        </section>

    )
}


export default FilterInfo