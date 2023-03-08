import React from 'react'
import './Cards.css'

export const Cards = ({ recipes, setRecipes }) => {
    return (
        <div className="cards-container">
            {recipes.map((ele) => {

                // console.log(ele.recipe)
                return <div className='cards'>
                     <h1>{ele.recipe.label}</h1>
                     <img src={ele.recipe.image}></img>
                     <h4>calories:{(ele.recipe.calories).toFixed(2)}</h4>
                     <ol>
                        {ele.recipe.ingredientLines.map((e,index) =>{
                             if(index <=4){
                               return <li>{e}</li>
                             }
                        })}
                        
                        
                     </ol>
                </div>
                
            })}
        </div>
    )
}
