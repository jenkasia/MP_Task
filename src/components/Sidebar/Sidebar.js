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

    if (this.props.sidebarIsOpen) {
      return (
        <>
          <div className="sidebar__backdrop sidebar__backdrop_open" onClick={this.props.onClick} />
          <div className="sidebar__header">
            <div className="sidebar__button sidebar__button_open" onClick={this.props.onClick}>
              <div className="sidebar__burger"></div>
            </div>
            <h3 className="sidebar__favorite">Favorite</h3>
          </div>
          <div className="sidebar sidebar_open">
            {this.props.jokes.length > 0
              ? this.createJokes(this.props.jokes)
              : null
            }
          </div>
        </>)
    }

    return (
      <>
        <div className="sidebar__backdrop" onClick={this.props.onClick} />
        <div className="sidebar__header">
          <div className="sidebar__button" onClick={this.props.onClick}>
            <div className="sidebar__burger"></div>
          </div>
          <h3 className="sidebar__favorite">Favorite</h3>
        </div>
        <div className="sidebar">
          {this.props.jokes.length > 0
            ? this.createJokes(this.props.jokes)
            : null
          }
        </div>
      </>
    )

  }
}

export default Sidebar;
