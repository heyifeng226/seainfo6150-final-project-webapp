import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";
import CategoryListItem from "./CategoryListItem.jsx";

const getCategoryTitle = (category, categoryID) => {
  if (category.id === categoryID) {
    return (
      <div className={styles.categoryTitle}>
        <p>{category.name}</p>
      </div>
    );
  }
};


const Category = (props) => {
  return (
    
    <div className={styles.categoryContainer}>
      {props.categorys.map((category) =>
        getCategoryTitle(category, props.categoryID)
      )}
      {props.recipes.map((recipe) =>
        CategoryListItem(recipe, props.categoryID)
      )}
      <Link className={styles.categoryBackLink} to="/category">
        &lt; Back to All Category Page
      </Link>
    </div>
    
  );
};

export default Category;
