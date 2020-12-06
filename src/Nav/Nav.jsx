import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
    return(
        <nav>
            <Link to="/">
            <img
              className={styles.logo}
              src="/images/recipe-logo.png"
              alt="myrecipes logo"
            />
          </Link>
          <Link className={styles.title} to="/">
            MyRecipes
          </Link>
          <Link className={styles.navTab} to="/category">
            All Category
          </Link>
          <Link className={styles.navTab} to="/collection">
            My Recipes
          </Link>
          <Link className={styles.navTab} to="/about">
            About Us
          </Link>
          <Link className={styles.navTab} to="/contact">
            Contact Us
          </Link>
          <Link className={styles.subscribe} to="/subscribe">
            Login
          </Link>
        </nav>
    )
};

export default Nav;
