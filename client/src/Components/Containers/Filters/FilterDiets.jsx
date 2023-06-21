import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterCards } from '../../../Redux/Actions'


const FilterDiets = () => {
    const dispatch = useDispatch()

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const data = useSelector(state => state.diets)
    return (

        <select onChange={handleFilter} >
            <option selected disabled>Filter Diets</option>
            {
                data.map((diets, index) => (
                    <option key={index}
                        value={diets}
                    >{diets}
                    </option>
                )) //debe mapear la respuesta de la api y regresar una <option/> por cada elemnto

            }
        </select>
    )
}

export default FilterDiets