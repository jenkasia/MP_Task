import React from "react";
import Joke from "../Joke/Joke"
import Form from "../Form/Form"
import Error from "../Error/Error"
import "./Home.sass";


const API_START_URL = "https://api.chucknorris.io/jokes/"

class Home extends React.Component {

  state = {
    jokes: [],
    error: '',
    jokeCategories: ''
  }

  getCategories = async () => {
    const api_url = await fetch(`https://api.chucknorris.io/jokes/categories`)
    const data = await api_url.json()
    console.log('data')
    this.setState({
      jokeCategories: data
    })

  }

  getJokes = async (apiEndUrl) => {
    const api_url = await fetch(`${API_START_URL + apiEndUrl}`)
    const data = await api_url.json()

    if (data.result) {
      if (data.result.length > 0) {
        this.setState({
          jokes: data.result,
          error: ''
        });
      }
      else {
        this.setState({
          jokes: [],
          error: 'Jokes was not found'
        });
      }

    }
    else if (data.error) {
      this.setState({
        jokes: [],
        error: data.message
      })
    }
    else {
      // console.log(data)
      this.setState({
        jokes: [data],
        error: ''
      });
    }

  }

  isFavorite = (joke) => {

    for (const favoriteJoke of this.props.favoriteJokes) {
      if (favoriteJoke.id === joke.id) {
        return true
      }
    }
    return false
  }

  createJokes = (jokes) => {
    return (
      <div className="jokes">
        {
          jokes.map(joke => {
            return this.isFavorite(joke)
              ? <Joke
                key={joke.id}
                onIconClick={this.props.removeFavoriteJokeHandler}
                icon="love-icon_fill.svg"
                joke={joke}
              />
              : <Joke
                key={joke.id}
                onIconClick={this.props.addFavoriteJokeHandler}
                icon="love-icon.svg"
                joke={joke}
              />
          })
        }
      </div>)
  }



  render() {

    if (!this.state.jokeCategories) {
      this.getCategories()
    }

    return (
      <div className="main-block">
        <header className="main-block__header">
          <p className="main-block__logo"> Msi 2020 </p>
          <h3 className="main-header">Hey!</h3>
          <h4 className="sub-header">Let’s try to find a joke for you:</h4>
        </header>

        <Form
          getJokes={this.getJokes}
          jokeCategories={this.state.jokeCategories} />

        {
          this.state.jokes.length !== 0
            ? this.createJokes(this.state.jokes)
            : null
        }

        {
          this.state.error
            ? <Error>
              {this.state.error}
            </Error>

            : null
        }

      </div>
    )
  }

}

export default Home;
