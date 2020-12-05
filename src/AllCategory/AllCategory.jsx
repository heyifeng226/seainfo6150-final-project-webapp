import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllCategory.module.css";

const AllCategory = () => {
  return (
    <div className={styles.allCategoryContainer}>
      <p className={styles.allCategoryDetail}>
        Feel free to scroll down and click on the cards below.
        <br />
        Pick the categories you like and start exploring!
      </p>
      
    </div>
  );
};

export default AllCategory;
