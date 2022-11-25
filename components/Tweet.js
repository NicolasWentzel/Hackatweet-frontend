import styles from "../styles/tweet.module.css";
import Image from "next/image";

function Tweet(props) {
  return (
    <div>
      <Image
        src="/tweeter.png"
        alt=""
        width={40}
        height={40}
        className={styles.userLogo}
      />
      <span> {props.firstname} </span>
      <span> {props.username}</span>
      <span> {props.time} </span>
      <div className={styles.texteTweet}>
        <p>{props.content}</p>
        <span className={styles.heart}> ❤️ </span>
        <span className={styles.deleteButton}> 🗑 </span>
      </div>
    </div>
  );
}

export default Tweet;
