import React from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = ({ filteredBurgers, changeDisplayBurger, deleteBurger }) => {
  return (
    <div className="BurgerList">
      { filteredBurgers.map(burger => 
          <BurgerItem key={ burger.id } 
                      burger={ burger } 
                      changeDisplayBurger={ changeDisplayBurger }
                      deleteBurger = { deleteBurger }
          />
        ) 
      }
    </div>
  )
}

export default BurgerList
