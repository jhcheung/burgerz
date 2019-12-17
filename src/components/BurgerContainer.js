import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    filter: "All"
  }

  changeFilter = (filterOption) => {
    this.setState({ filter: filterOption })
  }

  filteredBurgers = () => {
    if (this.state.filter === "All") {
      return this.props.burgers
    } else {
      return this.props.burgers.filter(burger => this.state.filter === burger.category)
    }
  }
  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter changeFilter={ this.changeFilter } filter={ this.state.filter } />
        <BurgerList changeDisplayBurger={ this.props.changeDisplayBurger } filteredBurgers={ this.filteredBurgers() } deleteBurger={ this.props.deleteBurger } />
      </div>
    )
  }
}
