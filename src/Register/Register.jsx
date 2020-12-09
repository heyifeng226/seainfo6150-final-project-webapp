import React, {useEffect, useState} from "react";
import styles from "./Register.module.css";


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
                (<p className={styles.welcome}>Thank you for joining us {submittedForm.get("username")}!</p>)
        : (
          <form onSubmit={onSubmit}>
            <div className={styles.usernameBox}>
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" id="username" required="required"/>
            </div>
            <div className={styles.passwordBox}>
              <label htmlFor="password">Password: </label>
              <input type="text" name="password" id="password" required="required"/> <br/>
            </div>
            <div className={styles.heard}>
              <label htmlFor="heard">Email: </label>
              <input type="text" name="heard" id="heard" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required="required"/>
            </div>
            <div className={styles.food}>
              <label htmlFor="food">What's your favorate food? </label>
              <input type="text" name="food" id="food"/>
            </div>
            <div className={styles.cook}>
              <label htmlFor="cook">Do you love cooking? </label>
              <input type="text" name="cook" id="cook"/>
            </div>
            <div className={styles.genderBox}>
              <label htmlFor="myDropdownId">Gender: </label>
              <select name="myDropdown" id="myDropdownId">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className={styles.ageBox}>
                <label htmlFor="ageDropdownId">Age: </label>
                <select name="ageDropdownId" id="ageDropdownId">
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
            <input className={styles.submit} type="submit" value="Sign up" />
          </form>
        )
      }
    </div>
  )
}

export default Register;