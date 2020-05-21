import React from "react";
import "./Form.sass";
import Categories from "./Categories/Categories"

class Form extends React.Component {



  state = {
    searchType: 'random',
    activeCategory: '',
    search: '',
    queryError: ' '
  };


  handleGetJoke(apiEndUrl) {

    switch (apiEndUrl) {
      case 'random':
        return () => {
          this.props.getJokesMethod('random')
        }

      case 'category':
        return () => {
          this.props.getJokesMethod(`random?category=${this.state.activeCategory}`)
        }

      case 'search':
        return () => {
          this.props.getJokesMethod(`search?query=${this.state.search}`)
        }

      default:
        break;
    }
  }

  categoryHandler = (category) => {
    this.setState({
      activeCategory: category
    })
  }

  searchFieldHandler = event => {
    // console.log(event.target.value.length)
    if (event.target.value.length < 3 || event.target.value.length > 120) {
      this.setState({
        search: event.target.value,
        queryError: 'Plese input valid value'
      })

    }
    else {
      this.setState({
        search: event.target.value,
        queryError: ''
      })
    }
  }

  render() {

    // console.log("thisState", this.state)
    return (
      <ul id="search-type" className="search-type">
        <li className="search-type__item">
          <input
            className='main-radio__input'
            type="radio"
            id="random"
            name="getMethod"
            value="random"
            checked={this.state.searchType === "random"}
            onChange={(e) => this.setState({ searchType: e.target.value })}
          />
          <label className="main-radio__label" for="random">Random</label>
        </li>

        <li className="search-type__item">
          <input className='main-radio__input'
            type="radio"
            id="category"
            name="getMethod"
            value="category"
            checked={this.state.searchType === "category"}
            onChange={(e) => {
              this.state.activeCategory
                ? this.setState({
                  searchType: e.target.value,
                })
                : this.setState({
                  searchType: e.target.value,
                  activeCategory: this.props.jokeCategories[0]
                }
                )
            }}
          />
          <label className="main-radio__label" for="category">From category</label>
          {this.state.searchType === 'category' ?
            < Categories
              categoriesList={this.props.jokeCategories}
              categoryHandler={this.categoryHandler}
              activeCategory={this.state.activeCategory} />
            : null}
        </li>

        <li className="search-type__item">
          <input className='main-radio__input'
            type="radio"
            id="search"
            name="getMethod"
            value="search"
            checked={this.state.searchType === "search"}
            onChange={(e) => {
              return this.setState({ searchType: e.target.value })
            }}
          />
          <label className="main-radio__label" for="search">Search</label>
        </li>
        {
          this.state.searchType === 'search'
            ? <div className="input__box">

              <input
                className="search__input"
                type="text"
                id="lname"
                name="lname"
                value={this.state.search}
                placeholder="Free text search..."
                // error={this.state.queryError}x
                onChange={this.searchFieldHandler} />
            </div>
            : null
        }
        < button
          disabled={
            this.state.queryError && this.state.searchType === 'search'
              ? true
              : false
          }
          onClick={this.handleGetJoke(this.state.searchType)}
          className="search-type__button"
          type="button">Get a joke</button>
      </ul >
    )
  }
}

export default Form;
