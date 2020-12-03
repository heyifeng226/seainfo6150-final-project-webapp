import React from 'react'
import Form from "../Form/Form";
import background from "../images/background.jpg";
import styles from "./HomePage.module.css";

const Home = () => {
    return (
        <div>
            The home page
            <h1>I changed this homepage</h1>
            <img className={styles.homeImg} src={background} alt="blue background" />
            <Form />
        </div>
    )
}

export default Home
