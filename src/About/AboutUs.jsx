import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutContainer}>
        <div className={styles.About_part}>
            <h2 className={styles.title}>About Us</h2>
            <img
                src="https://www.careeraddict.com/uploads/article/58721/illustration-group-people-team-meeting.jpg"
                alt="About Us"/>
            <p>
            Hello and welcome to MyRecipes!
            Thank you so much for stopping by the site! If you are new to MyRecipes, 
            the one thing you should know about us is that we are obsessed with creating scratch cooking recipes that you will love. 
            </p>
            <p>
            MyRecipes was founded in 2020, and was produced by a team of experienced cooks devoted to high quality, accessible home cooking.
            MyRecipes is an original and food-focused social network created for cooks by cooks; 
            where everyone plays a part in helping cooks discover and share the joy of cooking
            </p>
            <p>
            Our goal is to encourage people to cook at home, and to make the process of feeding your family and loved ones less intimidating and more enjoyable.
            Our recipes are all tested in our own home kitchens, usually several times.
            </p>
            <p>
                Cooking Smarter. Together.
            </p>
            <p>Thanks so much for visiting MyRecipes!</p>
        </div>
    </section>
  );
};

export default AboutUs;
