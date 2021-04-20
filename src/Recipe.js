import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ recipe }) => {
  const { label, image, calories, ingredients } = recipe
  return (
    <div className={style.recipe}>
      <h2>{label}</h2>
      {image && <img src={image} alt={label} className={style.image} />}
      <div className={style.ol}>
        <div className={style.olin}>
          <ol>
            {ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient.text}</li>
            })}
          </ol>
        </div>
      </div>
      <h3>Calories: {calories.toFixed(2)}</h3>
    </div>
  )
}

export default Recipe
