import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}> 
            <img
              className={styles.logo}
              src="/images/recipe-logo.png"
              alt="myrecipes logo"
            />
            <p className={styles.text}> 
            ©2020-{new Date().getFullYear()} MyRecipes, by Heyi Feng
            </p>
        </div>
    )
};

export default Footer;