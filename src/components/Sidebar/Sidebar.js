import React from "react";
import "./Sidebar.sass";
import Joke from "../Joke/Joke"

class Sidebar extends React.Component {


  createJokes = (jokes) => {
    return (
      <div className="jokes">
        {
          jokes.map(joke => {
            return <Joke
              icon="love-icon_fill.svg"
              className="joke_sidebar"
              joke={joke.value}
              id={joke.id}
              lastUpdate={joke.updated_at}
              iconClickHandler={this.props.removeFavoriteJokeHandler}
              jokeObject={joke}
            // categories={joke.categories}
            />
          })
        }
      </div>)
  }

  render() {
    return (
      <div className="sidebar">
        <h3 className="sidebar__favorite">Favorite</h3>
        {this.props.jokes.length > 0
          ? this.createJokes(this.props.jokes)
          : null
        }

      </div>

    )
  }

}

export default Sidebar;
