import styles from "../styles/lasttweet.module.css";
import React, { useState } from "react";

function LastTweet() {
  const [lastTweet, setLastTweet] = useState("");

  const newTweet = () => {
    fetch("http://localhost:3000/users/tweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // firstname: ,
        // username: ,
        // time: Date(),
        // content: lastTweet,
        // hashtag: ,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signUpUsername, token: data.token }));
          setSignUpUsername("");
          setSignUpPassword("");
          setIsModalVisible(false);
        }
      });
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
          <button className={styles.tweetButton}>Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default LastTweet;
