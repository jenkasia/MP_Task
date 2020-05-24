import React from 'react';
import './App.sass';
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
// import { render } from 'node-sass';


class App extends React.Component {

  state = {
    favoriteJokes: JSON.parse(localStorage.getItem('favoriteJokes')) || [],
    isSidebarOpen: false
  }

  addFavoriteJoke = (joke) => {

    this.setState(
      prevState => {
        return {
          favoriteJokes: prevState.favoriteJokes.concat(joke)
        }
      },
      () => {
        localStorage.setItem('favoriteJokes', JSON.stringify(this.state.favoriteJokes))
      }
    )
  }

  removeFavoriteJoke = (jokeToRemove) => {
    this.setState(
      prevState => {
        console.log("App -> removeFavoriteJoke -> prevState", prevState)
        return {
          favoriteJokes: prevState.favoriteJokes.filter(joke => joke.id !== jokeToRemove.id)
        };
      },
      () => {
        localStorage.setItem('favoriteJokes', JSON.stringify(this.state.favoriteJokes))
      }
    );
  }

  toggleIsSidebarOpen = () => {
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen
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
          isSidebarOpen={this.state.isSidebarOpen}
          toggleIsSidebarOpen={this.toggleIsSidebarOpen}
        />
      </div>
    );
  }
}

export default App;
