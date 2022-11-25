import styles from "../styles/tweet.module.css";
import Image from "next/image";

import React, { useState } from "react";

function Tweet() {
  return (
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          unde vel magni possimus libero, alias suscipit nobis officia
          accusantium.
        </p>
        <span class={styles.heart}> ❤️ </span>
        <span class={styles.deleteButton}> 🗑 </span>
      </div>
    </div>
  );
}

export default Tweet;
