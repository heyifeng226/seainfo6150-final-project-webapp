import React from 'react'
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
    <img
        className={styles.homeImg}
        src="https://food-images.files.bbci.co.uk/food/recipes/simple_fish_dish_98008_16x9.jpg"
        alt="homepage"
      />
    
      <h1 className={styles.homeTitle}>Welcome to MyRecipes!!!</h1>
      <p className={styles.categoryText}>
        Never miss a recipe!
        &nbsp;<Link className={styles.categoryBackLink} to="/register">
        &lt; Register &gt;
      </Link> for our Website to get new recipes!
      </p>
    </div>
    )
}

export default Home
