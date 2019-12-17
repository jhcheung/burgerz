import React from 'react';

const BurgerItem = ({ burger, changeDisplayBurger, deleteBurger }) => {
  return (
    <div>
      <div className="BurgerItem">
        { burger.name }
      </div>
      <div className="BurgerBottomBun">
        <button onClick={() => changeDisplayBurger(burger) }>Show</button>
        <button onClick={() => deleteBurger(burger)}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
