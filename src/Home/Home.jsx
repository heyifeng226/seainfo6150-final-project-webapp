import React from 'react'
import Form from "../Form/Form";
import styles from "./HomePage.module.css";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
    <img
        className={styles.homeImg}
        srcSet="/images/homekitchen-400.png 400w, /images/homekitchen-600.png 600w, /images/homekitchen-800.png 800w"
        alt="homepage"
      />
    
      <h1 className={styles.homeTitle}>Welcome to MyRecipes!!!</h1>
    </div>
    )
}

export default Home
