import React from "react";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";


const getRecipeDetail = (recipe, recipeID) => {
    if (recipe.recipeID === recipeID) {
    return (
      <div className={styles.recipeContainer}>
        <div className={styles.Recipe_part}>
        <img
          className={styles.recipeImg}
          src={recipe.imageURL}
          alt={recipe.name}
        />
        <h1 className={styles.recipeName}>{recipe.name}</h1>
        <p className={styles.recipeDescription}>{recipe.description}</p>
        <h2 className={styles.recipeTitle}>Ingredients</h2>
        <p className={styles.recipeIngredients}>{recipe.ingredients}</p>
        <h2 className={styles.recipeTitle}>Cooking Directions</h2>
        <p className={styles.recipeDetail}>{recipe.details.one}</p>
        <p className={styles.recipeDetail}>{recipe.details.two}</p>
        <p className={styles.recipeDetail}>{recipe.details.three}</p>
        <p className={styles.recipeDetail}>{recipe.details.four}</p>
        
        <p className={styles.box}>
          <Link className={styles.catBackLink} to={recipe.categoryURL}>
            &lt; Back to {recipe.categoryName} Page
          </Link>
          <Link className={styles.recipeBackLink} to="/recipes">
        Back to All Recipes Page &gt;
      </Link>
        </p>
        </div>
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