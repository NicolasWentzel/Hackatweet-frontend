import styles from "../styles/Main.module.css";
import Image from "next/image";

import React, { useState } from "react";

function Main() {
  const [tweetErea, setTweetErea] = useState("");
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
        <div className={styles.homeContainer}>
          <h1 className={styles.homeTitle}>Home</h1>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="What's Up ?"
              id="tweetErea"
              onChange={(e) => setTweetErea(e.target.value)}
              value={tweetErea}
            />
          </div>
          <div className={styles.postTweet}>
            <span>Compteur 0/280</span>
            <button className={styles.tweetButton}>Tweet</button>
          </div>
        </div>
        <div className={styles.tweetContainer}>
          <div>
            <Image
              src="/tweeter.png"
              alt=""
              width={40}
              height={40}
              className={styles.userLogo}
            />
            <span> Firstname </span>
            <span> Username</span>
            <span> Timer </span>
            <div class={styles.texteTweet}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae unde vel magni possimus libero, alias suscipit nobis
                officia accusantium.
              </p>
              <span class={styles.heart}> ❤️ </span>
              <span class={styles.deleteButton}> 🗑 </span>
            </div>
          </div>
          <div>
            <Image
              src="/frontend/public/tweeter.png"
              alt=""
              width={40}
              height={40}
              className={styles.userLogo}
            />
            <span> Firstname </span>
            <span> Username</span>
            <span> Timer </span>
            <div class={styles.texteTweet}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae unde vel magni possimus libero, alias suscipit nobis
                officia accusantium.
              </p>
              <span class={styles.heart}> ❤️ </span>
              <span class="delete"> 🗑 </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightConainter}>
        <div>
          <h1>Trends</h1>
          <div className={styles.trendContainer}>
            <div>#hello</div>
            <div>#Test</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

{
  /* <div className={styles.logoNameContainer}>
        <span className={styles.logo}>Hackatweet</span>
      </div>
      <div className="home-container">
        <h1>Home</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="What's Up ?"
            id="tweetErea"
            onChange={(e) => setTweetErea(e.target.value)}
            value={tweetErea}
          />
        </div>
      </div> */
}
