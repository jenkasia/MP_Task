import React from "react";
import PropTypes from 'prop-types';
import "./Sidebar.sass";
import Joke from "../Joke/Joke"

class Sidebar extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 20 && window.innerWidth < 970) {
        window.sidebar_header.style.opacity = "0"
      }
      else {
        window.sidebar_header.style.opacity = "1"
      }
    });
  }

  renderJokes() {
    return this.props.jokes.length > 0
      ? (
        <div className="jokes jokes_sidebar"
          id="sidebar">
          {this.props.jokes.map(joke => {
            return <Joke
              key={joke.id}
              icon="love-icon_fill.svg"
              className="joke_sidebar"
              onIconClick={this.props.removeFavoriteJokeHandler}
              joke={joke} />
          })}
        </div>)
      : null
  }

  render() {
    return (
      <>
        <div
          className={`sidebar__backdrop ${this.props.isSidebarOpen ? 'sidebar__backdrop_open' : ''}`}
          onClick={this.props.toggleIsSidebarOpen} />

        <div className={`sidebar ${this.props.isSidebarOpen ? 'sidebar_open' : ''}`}>
          <div
            className="sidebar__header"
            id="sidebar_header">
            <div
              className={`sidebar__button ${this.props.isSidebarOpen ? 'sidebar__button_open' : ''}`}
              onClick={this.props.toggleIsSidebarOpen}>
              <div className="sidebar__burger" />
            </div>
            <h3 className="sidebar__favorite">
              Favorite
            </h3>
          </div>
          {this.renderJokes()}
        </div>
      </>)
  }
}

Joke.propTypes = {
  jokes: PropTypes.array,
  removeFavoriteJokeHandler: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
  toggleIsSidebarOpen: PropTypes.func
}

export default Sidebar;
