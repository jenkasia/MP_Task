import React from "react";
import "./joke.sass";

class Joke extends React.Component {

  getHours(date) {
    // console.log("Joke -> getHours -> date", date)
    const MILISECONDS_IN_HOUR = 3600000
    const now = Date.now()
    const presentDate = new Date(date)
    const result = Math.floor((now - presentDate) / MILISECONDS_IN_HOUR)

    if (result === 1) {
      return `1 hour ago`
    }
    return `${result} hour ago`
  }

  categoryRender(categories) {
    if (categories && categories.length > 0) {
      return <p className="joke__category">{categories[0]}</p>
    }
    return <p></p>
  }

  render() {
    // console.log('props', this.props)
    return (
      <div className={`joke ${this.props.className}`} >

        <img onClick={event => this.props.iconClickHandler(this.props.jokeObject)} className="joke__love-icon" alt="icon" src={`img/${this.props.icon}`}></img>

        <div className="joke__content">

          <div className="joke__icon-box">
            <img className="joke__text-icon" alt="icon" src="img/text-icon.svg"></img>
          </div>

          <div className="joke__layout ">
            <div className="joke__id">
              <p className="joke__id-text">ID: <span className="joke__id-number">{this.props.id}</span></p>
              <img className="joke__id-icon" src="img/share-icon.svg" alt="icon"></img>
            </div>
            <div className="joke__text-block">
              <p className="joke__text">{this.props.joke}</p>
            </div>
            <div className="joke__footer">
              <p className="joke__update">
                Last update: <span className="joke__update-hours">{this.getHours(this.props.lastUpdate)}</span>
              </p>
              {this.categoryRender(this.props.categories)}
            </div>
          </div>

        </div>
      </div >
    )
  }

}

export default Joke;
