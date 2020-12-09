import React, {useEffect, useState} from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";

const Login = () => {

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
            (<p className={styles.welcome}>Welcome back {submittedForm.get("username")}!</p>)
        : (
          <form onSubmit={onSubmit}>
            <div className={styles.usernamBox}>
              <label htmlFor="username">Username: </label><br/>
              <input type="text" name="username" id="username" required="required" placeholder="Enter Username"/>
            </div>
            <div className={styles.passwordBox}>
              <label htmlFor="password">Password: </label><br/>
              <input type="text" name="password" id="password" required="required" placeholder="Enter Password"/>
            </div>
            <div>Dont't have an account?<Link to="/register" className={styles.registerLink}>Register here</Link></div>
            <input className={styles.submit} type="submit" value="Login in" />
          </form>
        )
      }
    </div>
  )
}

export default Login;