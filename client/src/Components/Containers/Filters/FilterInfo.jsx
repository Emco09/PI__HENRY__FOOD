import React from 'react'
import { useDispatch } from 'react-redux'
import { infoApiDb } from '../../../Redux/Actions'

const FilterInfo = () => {
    const dispatch = useDispatch()

    const handlerApiDb = (event) => {
        dispatch(infoApiDb(event.target.value))
    }

    return (
        <section>
            <select onChange={handlerApiDb} >
                <option selected disabled>Info</option>
                <option value="api">Api</option>
                <option value="db">Db</option>
            </select>
        </section>
    )
}


export default FilterInfo