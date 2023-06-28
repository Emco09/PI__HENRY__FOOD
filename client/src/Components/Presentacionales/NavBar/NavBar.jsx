import React from 'react'
import './Navbar.style.css'
import { Create } from '../../Containers/Buttons/Buttons'
import Order from '../../Containers/Order/Order'
import SearchBar from '../../Containers/SearchBar/SearchBar'
import FilterInfo from '../../Containers/Filters/FilterInfo'
import FilterDiets from '../../Containers/Filters/FilterDiets'


const NavBar = ({ setCurrentPage }) => {

  return (
    <section className='navbar'>
      <section className='navbar__options'>
        <Order
          setCurrentPage={setCurrentPage}
        />
        <FilterDiets
          setCurrentPage={setCurrentPage}
        />
        <FilterInfo
          setCurrentPage={setCurrentPage}
        />
      </section >
      <SearchBar />
      <Create />
    </section>
  )
}

export default NavBar