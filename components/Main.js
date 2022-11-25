import styles from "../styles/Main.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LastTweet from "./LastTweet";
import {} from "../reducers/lasttweet";
import Tweet from "./Tweet";
import {} from "../reducers/tweet";
import Trends from "./Trends";
import {} from "../reducers/trends";
import { logout } from "../reducers/user";
import { useRouter } from "next/router";

function Main() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
  };

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweets(data.tweets);
      });
  }, []);

  useEffect(() => {}, [tweets]);

  const allTweets = tweets.map((data, i) => {
    return <Tweet key={i} {...data} />;
  });

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
          <div className={styles.userName}>{user.firstname}</div>
          <div className={styles.userName}> @ {user.username}</div>
          <div className={styles.logoutButton}>
            <button
              onClick={() => {
                handleLogout();
                router.push("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className={styles.middleConainter}>
        <LastTweet />
        <div className={styles.tweetContainer}>{allTweets}</div>
      </div>
      <div className={styles.rightConainter}>
        <Trends />
      </div>
    </div>
  );
}

export default Main;
