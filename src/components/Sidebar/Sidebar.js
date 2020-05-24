import React from "react";
import "./Sidebar.sass";
import Joke from "../Joke/Joke"

class Sidebar extends React.Component {

  componentDidMount() {
    console.log("mount")
    window.addEventListener('scroll', function () {
      console.log(window.pageYOffset)
      if (window.pageYOffset > 20) {
        window.sidebar_header.style.opacity = "0"
      }
      else {
        window.sidebar_header.style.opacity = "1"
      }
    });
  }

  createJokes = (jokes) => {
    return (
      <div className="jokes jokes_sidebar"
        id="sidebar">
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
        <div className={`sidebar__backdrop ${this.props.isSidebarOpen ? 'sidebar__backdrop_open' : ''}`} onClick={this.props.toggleIsSidebarOpen} />
        <div className={`sidebar ${this.props.isSidebarOpen ? 'sidebar_open' : ''}`}>
          <div className="sidebar__header" id="sidebar_header">
            <div className={`sidebar__button ${this.props.isSidebarOpen ? 'sidebar__button_open' : ''}`} onClick={this.props.toggleIsSidebarOpen}>
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
