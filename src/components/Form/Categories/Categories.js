import React from "react";
import "./Categories.sass";




class Categories extends React.Component {

  createCategories = (categories) => {
    return (
      <div className="categories">
        {categories.map(category => {
          return (
            <div className='category'
              key={category}>
              <input
                className="sub-radio__input"
                type="radio"
                id={`category__${category}`}
                name="category"
                value={`${category}`}
                checked={this.props.activeCategory === category}
                onChange={event => {
                  return this.props.categoryHandler(event.target.value)
                }
                } />
              <label
                className="sub-radio__label"
                htmlFor={`category__${category}`}>{`${category}`}</label>
            </div>
          )
        })
        }
      </div >
    )
  }



  render() {
    return (
      this.createCategories(this.props.categoriesList)
    )
  }


}



export default Categories;
