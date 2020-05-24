import React from "react";
import "./joke.sass";

class Joke extends React.Component {

  getHours(date) {
    console.log(date)
    const MILISECONDS_IN_HOUR = 3600000
    const now = Date.now()
    date = date.replace(' ', "T").concat("Z") //convert to data format^ that sapport safari, chrome and other browser
    const presentDate = new Date(date)
    const result = Math.floor((now - presentDate) / MILISECONDS_IN_HOUR)


    if (result === 1) {
      return `1 hour ago`
    }
    return `${result} hours ago`
  }

  renderCategory() {
    if (this.props.className === 'joke_sidebar') {
      return null
    }

    let categories = this.props.joke.categories
    if (categories && categories.length > 0) {
      return <p className="joke__category">{categories[0]}</p>
    }
    return <p></p>
  }

  render() {
    console.log(this.props.joke)
    return (
      <div className={`joke ${this.props.className || ''}`} >

        <img onClick={event => this.props.onIconClick(this.props.joke)} className="joke__love-icon" alt="icon" src={`img/${this.props.icon}`}></img>

        <div className="joke__content">

          <div className="joke__icon-box">
            <img className="joke__text-icon" alt="icon" src="img/text-icon.svg"></img>
          </div>

          <div className="joke__layout ">
            <div className="joke__id">
              <p className="joke__id-text">ID:
                <a href={this.props.joke.url} target="_blank" rel="noopener noreferrer">
                  <span className="joke__id-number">{this.props.joke.id}</span>
                  <img className="joke__id-icon" src="img/share-icon.svg" alt="icon"></img>
                </a>
              </p>
            </div>
            <div className="joke__text-block">
              <p className="joke__text">{this.props.joke.value}</p>
            </div>
            <div className="joke__footer">
              <p className="joke__update">
                Last update: <span className="joke__update-hours">{this.getHours(this.props.joke.updated_at)}</span>
              </p>
              {this.renderCategory()}
            </div>
          </div>

        </div>
      </div >
    )
  }

}

export default Joke;
