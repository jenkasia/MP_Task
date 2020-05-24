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


  onGetJokeButtonClick(apiEndUrl) {
    switch (apiEndUrl) {
      case 'random':
        this.props.getJokes('random')
        break;

      case 'category':
        this.props.getJokes(`random?category=${this.state.activeCategory}`)
        break;

      case 'search':
        this.props.getJokes(`search?query=${this.state.search}`)
        break;

      default:
        break;
    }
  }

  onSelectSeachByCategory = (category) => {
    this.setState({
      activeCategory: category
    })
  }

  onSelectSearchByInputText = event => {
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.onGetJokeButtonClick(this.state.searchType)
  }



  render() {

    return (
      <form onSubmit={this.handleSubmit}>
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
            <label className="main-radio__label" htmlFor="random">Random</label>
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
            <label className="main-radio__label" htmlFor="category">From category</label>
            {this.state.searchType === 'category' ?
              < Categories
                categoriesList={this.props.jokeCategories}
                onChange={this.onSelectSeachByCategory}
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
            <label className="main-radio__label" htmlFor="search">Search</label>
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
                  onChange={this.onSelectSearchByInputText} />
              </div>
              : null
          }
        </ul >
        < input
          disabled={this.state.queryError && this.state.searchType === 'search'}
          className="search-type__button"
          type="submit"
          value="Get a joke" />
      </form>
    )
  }
}

export default Form;
