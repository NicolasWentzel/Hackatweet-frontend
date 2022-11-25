import styles from "../styles/lasttweet.module.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function LastTweet() {
  const [lastTweet, setLastTweet] = useState("");
  const user = useSelector((state) => state.user.value);

  const newTweet = () => {
    fetch(
      "http://localhost:3000/tweets",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: user.firstname,
          username: user.username,
          time: Date(),
          content: lastTweet,
        }),
      },
      setLastTweet("")
    );
  };

  return (
    <div>
      <div className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>Home</h1>
        <div className={styles.inputContainer}>
          <textarea
            type="text"
            placeholder="What's Up ?"
            id="lastTweet"
            onChange={(e) => setLastTweet(e.target.value)}
            value={lastTweet}
          />
        </div>
        <div className={styles.postTweet}>
          <span>Compteur 0/280</span>
          <button className={styles.tweetButton} onClick={() => newTweet()}>
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastTweet;
