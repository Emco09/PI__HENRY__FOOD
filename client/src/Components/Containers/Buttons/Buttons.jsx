import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>Buttons</div>
  )
}

const Create = () => {
    return(
      <Link to ='/create'> 
        <button >Create</button>
      </Link>
    )

}

export { 
    Home,
    Create
}