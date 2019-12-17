import React, { Fragment } from 'react';

const BurgerDisplay = ({ displayBurger, changeBurgerCategory }) => {
  const handleChange = (e) => {
    changeBurgerCategory({ category: e.target.value })
  }

  return (
    <div className="BurgerDisplay">
      { displayBurger 
          ? <Fragment>
              <img src={ displayBurger.imgURL } alt={ displayBurger.name }/>
              <br/>
              <h1>{ displayBurger.name }</h1>
              <br/>
              <select value={ displayBurger.category } onChange={handleChange}>
                <option value="Relatable">Relatable</option>
                <option value="Bougie">Bougie</option>
              </select>
            </Fragment>
          : "No Burger Selected"
      }
    </div>
  )
}

export default BurgerDisplay
