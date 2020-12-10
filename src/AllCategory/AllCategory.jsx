import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllCategory.module.css";

const AllCategory = () => {
  return (
    <div className={styles.allCategoryContainer}>
      <p className={styles.allCategoryDetail}>
        Pick the categories you like to explore recipes!
      </p>

      
      <Link className={styles.allCategoryCard} to="/category/1">
        <img
          className={styles.allCategoryImg}
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1074500_11-4325965.jpg?quality=90&resize=768,574"
          alt="soup"
        />
        <p className={styles.allCategoryName}>Soup</p>
      </Link>
      <Link className={styles.allCategoryCard} to="/category/2">
        <img
          className={styles.allCategoryImg}
          src="https://images.food52.com/ZfRGQGHL02C8t3hIyBrvR-qaBUw=/1200x900/54a9bb89-dd79-432b-892f-576977829012--mini_spaghetti_and_meatball_appetizer-All_that-s_Jas.jpg"
          alt="appetizer"
        />
        <p className={styles.allCategoryName}>Appetizer</p>
      </Link>
      <Link className={styles.allCategoryCard} to="/category/3">
        <img
          className={styles.allCategoryImg}
          src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387918756116.jpeg"
          alt="main course"
        />
        <p className={styles.allCategoryName}>Main Course</p>
      </Link>
      <Link className={styles.allCategoryCard} to="/category/4">
        <img
          className={styles.allCategoryImg}
          src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg"
          alt="snack"
        />
        <p className={styles.allCategoryName}>Snack</p>
      </Link>
      <Link className={styles.allCategoryCard} to="/category/5">
        <img
          className={styles.allCategoryImg}
          src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/9/0/bh0204_passionberry1.jpg.rend.hgtvcom.826.620.suffix/1371584130151.jpeg"
          alt="dessert"
        />
        <p className={styles.allCategoryName}>Dessert</p>
      </Link>
    </div>
  );
};

export default AllCategory;
