import React from 'react'
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
           <img className={styles.homeImg}
                src="https://i.hexuexiao.cn/up/65/68/7a/f394100d455e5ff46426c1a6f97a6865.jpg"
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
