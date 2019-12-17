import React, { Component } from 'react';
// unused
// import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgers: [],
    displayBurger: null
  }
  
  fetchBurgers = () => {
    fetch('http://localhost:3001/burgers')
      .then(resp => resp.json())
      .then(data => this.setState({ burgers: data }))
  }

  componentDidMount() {
    this.fetchBurgers()
  }

  changeDisplayBurger = (burger) => {
    this.setState({ displayBurger: burger })
  } 

  deleteBurger = (deleteBurger) => {
    this.setState(prevState => {
      return {
        displayBurger: prevState.displayBurger === deleteBurger ? null : deleteBurger,
        burgers: prevState.burgers.filter(burger => burger.id !== deleteBurger.id )
      }
    })
  }

  changeBurgerCategory = (burgerChangeObj) => {
    const updateBurgerObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(burgerChangeObj)
    }
    fetch('http://localhost:3001/burgers/' + this.state.displayBurger.id, updateBurgerObj)
      .then(resp => resp.json())
      .then(editBurger => {
        if (editBurger.id && editBurger.id === this.state.displayBurger.id) {
          this.setState(prevState => { 
            return {
              displayBurger: editBurger,
              burgers: prevState.burgers.map(burger => burger.id === editBurger.id ? editBurger : burger) 
            } 
          })
        }
        this.fetchBurgers()
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgers} changeDisplayBurger={this.changeDisplayBurger} deleteBurger={this.deleteBurger}/>
        <BurgerDisplay displayBurger={this.state.displayBurger} changeBurgerCategory={ this.changeBurgerCategory }/>
      </div>
    );
  }
}

export default App;
