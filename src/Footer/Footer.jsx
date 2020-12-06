import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}> 
            <img
              className={styles.logo}
              src="https://cdn.imgbin.com/5/24/23/imgbin-chef-s-uniform-icon-chef-chef-hat-illustration-jtTMYSpLDGAG8eBgfNTWJP5pP.jpg"
              alt="myrecipes logo"
            />
            <p className={styles.text}> 
            ©2020-{new Date().getFullYear()} MyRecipes
            </p>
        </div>
    )
};

export default Footer;