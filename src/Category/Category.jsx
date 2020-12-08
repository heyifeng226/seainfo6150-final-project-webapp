import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

// <Link className={styles.categoryCard} to={recipe.detailURL}>
const getCategoryTitle = (category, categoryID) => {
  if (category.id === categoryID) {
    return (
      <div className={styles.categoryTitle}>
        <p>{category.name}</p>
      </div>
    );
  }
};

const getRecipePreview = (recipe, categoryID) => {
  if (recipe.categoryID === categoryID) {
    return (
      <div>
        <Link className={styles.categoryCard} to={recipe.detailURL}>
          <img
            src={recipe.imageURL}
            alt={recipe.name}
            className={styles.categoryRecipeImg}
          />
          <div className={styles.categoryRecipe}>
            <p className={styles.categoryRecipeName}>{recipe.name}</p>
            <p className={styles.categoryRecipeDescription}>
              {recipe.description}
            </p>
          </div>
        </Link>
      </div>
    );
  }
};

const Category = (props) => {
  return (
    <div className={styles.categoryContainer}>
      <Link className={styles.categoryBackLink} to="/category">
        &lt; Back to All Category Page
      </Link>
      {props.categorys.map((category) =>
        getCategoryTitle(category, props.categoryID)
      )}
      {props.content.map((recipe) =>
        getRecipePreview(recipe, props.categoryID)
      )}
      <p className={styles.categoryText}>
        More Recipes in the Future!&nbsp;
        &nbsp;our Website to see the Updates!
      </p>
    </div>
  );
};

export default Category;
