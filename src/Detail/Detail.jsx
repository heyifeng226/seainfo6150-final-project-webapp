import React from "react";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";


const getRecipeDetail = (recipe, recipeID) => {
    if (recipe.recipeID === recipeID) {
    return (
      <div className={styles.recipeContainer}>
        <img
          className={styles.recipeImg}
          src={recipe.imageURL}
          alt={recipe.name}
        />
        <h1 className={styles.recipeName}>{recipe.name}</h1>
        <h2 className={styles.recipeTitle}>Ingredients</h2>
        <p className={styles.recipeIngredients}>{recipe.ingredients}</p>
        <h2 className={styles.recipeTitle}>Cooking Directions</h2>
        <p className={styles.recipeDetail}>{recipe.details.one}</p>
        <p className={styles.recipeDetail}>{recipe.details.two}</p>
        <p className={styles.recipeDetail}>{recipe.details.three}</p>
        <p className={styles.recipeDetail}>{recipe.details.four}</p>
    
        <p>
          <Link className={styles.recipeBackLink} to={recipe.categoryURL}>
            &lt; Back to {recipe.categoryName} Page
          </Link>
        </p>
      </div>
    );
  }
};

const Detail = (props) => {
  return (
    <div>
      {props.content.map((recipe) =>
        getRecipeDetail(recipe, props.recipeID)
      )}
    </div>

  );
};

export default Detail;