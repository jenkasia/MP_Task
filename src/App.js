import React from 'react';
import './App.sass';
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
// import { render } from 'node-sass';


class App extends React.Component {

  state = {
    favoriteJokes: JSON.parse(localStorage.getItem('favoriteJokes')) || [],
    sidebarIsOpen: false
  }

  addFavoriteJoke = (joke) => {
    let newFavoriteJokes = this.state.favoriteJokes.concat(joke)
    this.setState(
      {
        favoriteJokes: newFavoriteJokes
      })
    localStorage.setItem('favoriteJokes', JSON.stringify(newFavoriteJokes))
  }

  removeFavoriteJoke = (jokeForRemove) => {
    const favoriteJokes = this.state.favoriteJokes
    for (let i = 0; i < favoriteJokes.length; i++) {


      if (favoriteJokes[i].id === jokeForRemove.id) {
        const newFavoriteJokesList = favoriteJokes.concat()
        newFavoriteJokesList.splice(i, 1)
        localStorage.setItem('favoriteJokes', JSON.stringify(newFavoriteJokesList))
        this.setState(
          {
            favoriteJokes: newFavoriteJokesList
          })
      }
    }
  }

  openToggleHandler = () => {
    this.setState({
      sidebarIsOpen: !this.state.sidebarIsOpen
    })
  }

  render() {
    return (
      <div className="App">
        <Home
          favoriteJokes={this.state.favoriteJokes}
          addFavoriteJokeHandler={this.addFavoriteJoke}
          removeFavoriteJokeHandler={this.removeFavoriteJoke}
        />
        <Sidebar
          jokes={this.state.favoriteJokes}
          removeFavoriteJokeHandler={this.removeFavoriteJoke}
          sidebarIsOpen={this.state.sidebarIsOpen}
          onClick={this.openToggleHandler}
        />

      </div>
    );
  }
}

export default App;
