import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
    return(
        <nav>
            <Link to="/">
            <img
              className={styles.logo}
              src="https://cdn.imgbin.com/5/24/23/imgbin-chef-s-uniform-icon-chef-chef-hat-illustration-jtTMYSpLDGAG8eBgfNTWJP5pP.jpg"
              alt="myrecipes logo"
            />
          </Link>
          <Link className={styles.title} to="/">
            MyRecipes
          </Link>
          <Link className={styles.navTab} to="/category">
            All Category
          </Link>
          <Link className={styles.navTab} to="/recipes">
            All Recipes
          </Link>
          <Link className={styles.navTab} to="/about">
            About Us
          </Link>
          <Link className={styles.navTab} to="/contact">
            Contact Us
          </Link>
          <Link className={styles.login} to="/subscribe">
            Subscribe
          </Link>
        </nav>
    )
};

export default Nav;
