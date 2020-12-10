import React, {useEffect, useState} from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {

  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
      {
        submittedForm ? 
                (<p className={styles.welcome}>Hi {submittedForm.get("username")}, Thank you for joining us!</p>)
        : (
          <form onSubmit={onSubmit} className={styles.contentBox}>
            <div className="logoBox">  
            <img
              className={styles.logo}
              src="https://cdn.imgbin.com/5/24/23/imgbin-chef-s-uniform-icon-chef-chef-hat-illustration-jtTMYSpLDGAG8eBgfNTWJP5pP.jpg"
              alt="myrecipes logo"
            />
            </div>
            <h1 className={styles.registerTitle}>Register</h1>
            <div className={styles.usernameBox}>
              <label htmlFor="username">Username: </label>
              <input type="text" className={styles.input} name="username" id="username" placeholder="Please Enter Username" required="required"/>
            </div>
            <div className={styles.passwordBox}>
              <label htmlFor="password">Password: </label>
              <input type="password" className={styles.input} name="password" id="password" placeholder="Please Enter Password" required="required"/> <br/>
            </div>
            <div className={styles.emailBox}>
              <label htmlFor="email">Email: </label>
              <input type="email" className={styles.input} name="email" id="email" placeholder="Please Enter Email Address" required="required"/><br/>
            </div>
            <p className={styles.opTitle}>Optional</p>
            <div className={styles.zipcodeBox}>
              <label htmlFor="zipcode">Zipcode: </label>
              <input type="number" className={styles.opinput} name="zipcode" id="zipcode"/><br/>
            </div>
            <div className={styles.phoneBox}>
              <label htmlFor="phone">Phone: </label>
              <input type="number" className={styles.opinput} name="phone" id="phone"/> <br/>
            </div>
           
            <div className={styles.genderBox}>
              <label htmlFor="gender">Gender: </label>
              <select name="genderDropdown" id="genderDropdown" className={styles.dropdown}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="decline">Decline to identify</option>
              </select>
            </div>
            <div className={styles.ageBox}>
                <label htmlFor="age">Age: </label>
                <select name="ageDropdown" id="ageDropdown" className={styles.dropdown}>
					          <option value="1">1-10</option>
                    <option value="10">10-20</option>
                    <option value="20">20-30</option>
                    <option value="30">30-40</option>
                    <option value="40">40-50</option>
                    <option value="50">50+</option>
                </select>
            </div>
            <div className={styles.checkBox}>
                <p>Interested in</p>
                <label htmlFor="soup" className={styles.checkItem}>Soup
                    <input type="checkbox" name="soup" className={styles.inputItem} />
                </label>
                <label htmlFor="appetizer" className={styles.checkItem}>Appetizer
                    <input type="checkbox" name="appetizer" className={styles.inputItem} />
                </label>
                <label htmlFor="mainCourse" className={styles.checkItem}>Main Course
                    <input type="checkbox" name="mainCourse" className={styles.inputItem} />
                </label>
				        <label htmlFor="snack" className={styles.checkItem}>Snack
                    <input type="checkbox" name="snack" className={styles.inputItem} />
                </label>
				        <label htmlFor="dessert" className={styles.checkItem}>Dessert
                    <input type="checkbox" name="dessert" className={styles.inputItem} />
                </label>
            </div>
            <input className={styles.submit} type="submit" value="Register" />
          </form>
        )
      }
    </div>
  )
}

export default Register;