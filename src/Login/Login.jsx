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
          <form onSubmit={onSubmit} className={styles.contentBox}>
            
            <div className="logoBox">  
            <img
              className={styles.logo}
              src="https://cdn.imgbin.com/5/24/23/imgbin-chef-s-uniform-icon-chef-chef-hat-illustration-jtTMYSpLDGAG8eBgfNTWJP5pP.jpg"
              alt="myrecipes logo"
            />
            </div>
            <h1 className={styles.loginTitle}>Login</h1>
            <div className={styles.usernameBox}>
              <label htmlFor="username">Username: </label><br/>
              <input type="text" className={styles.input} name="username" id="username" required="required" placeholder="Please Enter Username"/>
            </div>
            <div className={styles.passwordBox}>
              <label htmlFor="password">Password: </label><br/>
              <input type="text" className={styles.input} name="password" id="password" required="required" placeholder="Please Enter Password"/>
            </div>
            <div className={styles.alertBox}>Dont't have an account?<Link to="/register" className={styles.registerLink}>Register here</Link></div>
            <input className={styles.submit} type="submit" value="Login in" />
            
          </form>
        )
      }
    </div>
  )
}

export default Login;