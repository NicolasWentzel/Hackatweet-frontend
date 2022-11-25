import styles from "../styles/trends.module.css";

function Trends() {
  return (
    <div className={styles.trendContainer}>
      <h1>Trends</h1>
      <div className={styles.hashtagContainer}>
        <div>#hello</div>
        <div>#Test</div>
      </div>
    </div>
  );
}

export default Trends;
