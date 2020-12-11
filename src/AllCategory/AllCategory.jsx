import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllCategory.module.css";

const AllCategory = () => {
  return (
    <div className={styles.allCategoryContainer}>
      <h2 className={styles.allCategoryDetail}>
        Pick the categories you like to explore recipes!
      </h2>
      <div className={styles.ListContainer}>
        <div className={styles.container}>
      <Link className={styles.styleCategories} to="/category/Soup">
        <p className={styles.allCategoryName}>Soup</p>
      </Link>
      <Link className={styles.styleCategories} to="/category/Appetizer">
        <p className={styles.allCategoryName}>Appetizer</p>
      </Link>
      <Link className={styles.styleCategories} to="/category/Main-Course">
        <p className={styles.allCategoryName}>Main Course</p>
      </Link>
      <Link className={styles.styleCategories} to="/category/Snack">
        <p className={styles.allCategoryName}>Snack</p>
      </Link>
      <Link className={styles.styleCategories} to="/category/Dessert">
        <p className={styles.allCategoryName}>Dessert</p>
      </Link>
      </div>
      <div className="column2">
      <img
          className={styles.allCategoryImg}
          src="https://www.hndt.com/fm/900/201801/26/1931147/res/OEaAqZ9r.jpg"
          alt="food"
        />
      </div>
      </div>
    </div>
  );
};

export default AllCategory;
