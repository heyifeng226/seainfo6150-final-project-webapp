import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./CategoryListItem.module.css";

const CategoryListItem = (recipe, categoryID) => {
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

CategoryListItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  categoryID: PropTypes.number.isRequired
};
export default CategoryListItem;
