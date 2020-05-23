import React from "react";
import "./Sidebar.sass";
import Joke from "../Joke/Joke"

class Sidebar extends React.Component {



  createJokes = (jokes) => {
    return (
      <div className="jokes sidebar__jokes">
        {
          jokes.map(joke => {
            return <Joke
              key={joke.id}
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
      <>
        <div className={`sidebar__backdrop ${this.props.sidebarIsOpen ? 'sidebar__backdrop_open' : ''}`} onClick={this.props.onClick} />
        <div className={`sidebar ${this.props.sidebarIsOpen ? 'sidebar_open' : ''}`}>
          <div className="sidebar__header" >
            <div className={`sidebar__button ${this.props.sidebarIsOpen ? 'sidebar__button_open' : ''}`} onClick={this.props.onClick}>
              <div className="sidebar__burger"></div>
            </div>
            <h3 className="sidebar__favorite">Favorite</h3>
          </div>

          {this.props.jokes.length > 0
            ? this.createJokes(this.props.jokes)
            : null
          }


        </div>
      </>)
  }
}

export default Sidebar;
