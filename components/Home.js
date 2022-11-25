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
      <main className={styles.main}>
        <h1>See what's happening ...</h1>
        <h2>Join hackatweet today !</h2>
        <Button type="primary" onClick={() => dispatch(showModal())}>
          Sign up
        </Button>
        <SignUp />
        <p>Already have an account ?</p>
        <Button type="primary" onClick={() => dispatch(showModal2())}>
          Sign in
        </Button>
        <SignIn />
      </main>
    </div>
  );
}

export default Home;
