import styles from "../styles/Main.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LastTweet from "./LastTweet";
import {} from "../reducers/lasttweet";
import Tweet from "./Tweet";
import {} from "../reducers/tweet";
import Trends from "./Trends";
import {} from "../reducers/trends";

function Main() {
  const dispatch = useDispatch();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div>
          <button>
            <Image
              src="/tweeter.png"
              alt=""
              width={40}
              height={40}
              className={styles.logoButton}
            />
          </button>
        </div>
        <div>
          <div className={styles.userName}>Nicolas</div>
          <div className={styles.logoutButton}>
            <button>Logout</button>
          </div>
        </div>
      </div>
      <div className={styles.middleConainter}>
        <LastTweet />
        <div className={styles.tweetContainer}>
          <Tweet />
          <Tweet />
        </div>
      </div>
      <div className={styles.rightConainter}>
        <Trends />
      </div>
    </div>
  );
}

export default Main;
