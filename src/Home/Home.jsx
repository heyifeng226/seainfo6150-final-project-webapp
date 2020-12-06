import React from 'react'
import Form from "../Form/Form";
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
    </div>
    )
}

export default Home
