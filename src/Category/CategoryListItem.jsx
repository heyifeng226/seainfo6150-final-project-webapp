import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./CategoryListItem.module.css";

const CategoryListItem = (props) => {
  
    const recipe=props.recipe;
    return (
      <div>
        <Link className={styles.ListContainer} to={recipe.detailURL}>
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
    )
};

CategoryListItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};
export default CategoryListItem;
