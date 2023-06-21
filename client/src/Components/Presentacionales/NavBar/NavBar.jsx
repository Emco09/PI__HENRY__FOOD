import React from 'react'
import './Navbar.style.css'
import { Create } from '../../Containers/Buttons/Buttons'
import Order from '../../Containers/Order/Order'
import SearchBar from '../../Containers/SearchBar/SearchBar'
import FilterInfo from '../../Containers/Filters/FilterInfo'
import FilterDiets from '../../Containers/Filters/FilterDiets'


const NavBar = () => {
  return (
    <section className='navbar'>
      <section className='navbar__options'>
        <Order />
       <FilterInfo />
        <FilterDiets />
      </section >
      <SearchBar />
      <Create />
    </section>
  )
}

export default NavBar