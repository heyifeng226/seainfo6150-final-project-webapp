import React from 'react'
import Form from "../Form/Form";
import styles from "./HomePage.module.css";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
    <img
        className={styles.homeImg}
        srcSet="/images/homefood-400.jpg 400w, /images/homefood-600.jpg 600w, /images/homefood-800.jpg 800w"
        alt="homepage"
      />
    
      <h1 className={styles.homeTitle}>Welcome to MyRecipes!!!</h1>
      <p className={styles.homeText}>
        We have all recipes you need! 
      </p>
      <p className={styles.homeText}>Explore our website freely!</p>
    </div>
    )
}

export default Home
