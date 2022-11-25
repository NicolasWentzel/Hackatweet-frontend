import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import SignUp from "./signup";
import { useDispatch } from "react-redux";
import { showModal } from "../reducers/signup";
import SignIn from "./SignIn";
import { showModal2 } from "../reducers/signin";

function Home() {
  const dispatch = useDispatch();
  

  return (
    <div>
      
      <div className={styles.container}>
      
        <main className={styles.main}>
        <img className={styles.logo} src="Imagett.png" alt="Logo" />

          <h1 className={styles.title}>See what's<br/> happening ...</h1>
          <h2 className={styles.titlebis} >Join hackatweet today !</h2>
          <Button className={styles.btn} type="primary" onClick={() => dispatch(showModal())}>
            Sign up
          </Button>
          <SignUp />
          <p className={styles.p}>Already have an account ?</p>
          <Button className={styles.btnbis} type="primary" onClick={() => dispatch(showModal2())}>
            Sign in
          </Button>
          <SignIn />
          
        </main>
      </div>
    </div>
  );
}

export default Home;
