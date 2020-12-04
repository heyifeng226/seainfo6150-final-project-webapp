import React from 'react'
import Form from "../Form/Form";
import background from "../images/background.jpg";
import styles from "./HomePage.module.css";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
      <img
        className={styles.homeImg}
        srcset="/images/homekitchen-400.png 400w, /images/homekitchen-600.png 600w, /images/homekitchen-800.png 800w"
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
