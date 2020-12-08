import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutContainer}>
        <div className={styles.About_part}>
            <h2>About Us</h2>
            <img
                src="https://lh3.googleusercontent.com/proxy/JBXEaT1IMMMjJSyMxp8EP2YuwGoijv9tjI8omDfksPcxdalG6EDFPL7q3ielZWsIGN0qP_McnO6DEvQ7r2rg9MCgClu5B0I"
                alt="Company"/>
            <p>Cooking Smarter. Together.
                Myrecipes is an original and food-focused social network created for cooks by cooks; 
                where everyone plays a part in helping cooks discover and share the joy of cooking
            </p>
        </div>

        <div className={styles.Team_part}>
            <h2>Our Teams</h2>
            <img
                src="https://www.careeraddict.com/uploads/article/58721/illustration-group-people-team-meeting.jpg"
                alt="Team"/>
            <p>The professional team of the MyRecipes website was established in
                2020. 
            </p>
        </div>

        <div className={styles.Careers_part}>
            <h2>Careers</h2>
            <img
                src="https://nextadvocate.com/wp-content/uploads/2019/03/Careers-e1553244124511.jpg"
                alt="Career"/>
            <p>Dreamers Wanted:<br/>
                Our amazing team of people, the very heart of our company, breathe life into our
                vision every day with their ingenuity and collaborative spirit. Dont' wait to join us!
            </p>
        </div>
    </section>
  );
};

export default AboutUs;
