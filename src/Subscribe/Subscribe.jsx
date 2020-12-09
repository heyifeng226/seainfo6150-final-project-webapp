import React, {Component} from "react";
import styles from "./Subscribe.module.css";
import Form from "./Form.jsx";


const Subscribe = () => {
    return (
        <div>
            <h1 className={styles.Title}>Never miss a recipe!</h1>
            <p>Subscribe to get new recipes</p>
            <Form />
        </div>
    )
}

export default Subscribe;