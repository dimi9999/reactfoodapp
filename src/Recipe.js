import React from 'react';
import style from './recipe.module.css';

// 1. DEFINE YOUR PROPERTIES
const Recipe = ({title, calories, image, ingredients, totalWeight, cautions }) => {
   return(
        <div className={style.recipe}>
            <div className={style.imagecont}>
                <img className={style.image} src={image} alt="" />
            </div>
            <h2>{title}</h2>
            <p><strong>Calories: </strong>{calories}</p>
            <h3 className={style.ingredients}>Ingredients</h3>
               <ol>{
                    ingredients.map(ingredient =>(
                         <li>{ingredient.text}</li>
                    ))}
               </ol>
            <p>{totalWeight}</p>
            <p>{cautions}</p>
            
        </div>
   )
}

export default Recipe;