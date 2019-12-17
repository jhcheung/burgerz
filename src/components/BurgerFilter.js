import React from 'react';

const BurgerFilter = ({ changeFilter, filter }) => {
  return (
    <div className="BurgerFilter">
      <select onChange={ (e) => changeFilter(e.target.value) } value={ filter }>
        <option value="All">All</option>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerFilter
