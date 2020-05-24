import React from "react";
import "./Categories.sass";

function Categories(props) {

  return (
    <div className="categories">
      {props.categoriesList.map(category => {
        return (
          <div className='category'
            key={category}>
            <input
              className="sub-radio__input"
              type="radio"
              id={`category__${category}`}
              name="category"
              value={`${category}`}
              checked={props.activeCategory === category}
              onChange={event => {
                return props.onChange(event.target.value)
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



export default Categories;
