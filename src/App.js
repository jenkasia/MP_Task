import React from 'react';
import './App.sass';
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
// import { render } from 'node-sass';


class App extends React.Component {

  state = {
    favoriteJokes: JSON.parse(localStorage.getItem('favoriteJokes')) || []
  }

  addFavoriteJoke = (joke) => {
    console.log('this.state.favoriteJoke', this.state.favoriteJokes)
    let newFavoriteJokes = this.state.favoriteJokes.concat(joke)
    this.setState(
      {
        favoriteJokes: newFavoriteJokes
      })
    // console.log(newFavoriteJokes)
    localStorage.setItem('favoriteJokes', JSON.stringify(newFavoriteJokes))
  }


  removeFavoriteJoke = (jokeForRemove) => {
    const favoriteJokes = this.state.favoriteJokes
    console.log("App -> removeFavoriteJoke -> favoriteJokes", favoriteJokes)
    for (let i = 0; i < favoriteJokes.length; i++) {

      console.log("App -> removeFavoriteJoke ->  favoriteJokes[i].id", favoriteJokes[i].id)
      console.log("App -> removeFavoriteJoke -> jokeForRemove.id", jokeForRemove.id)

      if (favoriteJokes[i].id === jokeForRemove.id) {
        const newFavoriteJokesList = favoriteJokes.concat()
        newFavoriteJokesList.splice(i, 1)
        localStorage.setItem('favoriteJokes', JSON.stringify(newFavoriteJokesList))
        this.setState(
          {
            favoriteJokes: newFavoriteJokesList
          })
      }

      // if (object.hasOwnProperty(joke)) {
      //   const element = object[joke];

      // }
    }
    console.log('this.state.favoriteJoke', jokeForRemove)
  }

  render() {
    console.log(this.state.favoriteJokes)
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
        />

      </div>
    );
  }
}

export default App;
