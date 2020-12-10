import React from 'react'
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
           <img className={styles.homeImg}
                src="https://i.keaitupian.net/up/7b/e9/bb/c48adec6c91a1ed2ec5e6b7f65bbe97b.jpg"
                alt="Homepage"/>
    
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
