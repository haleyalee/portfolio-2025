import React from "react";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home} id="#">
      <div>front-end developer based in NYC</div>
      <div>previously at <a href="https://www.cognizant.com/us/en">@Cognizant</a> and <a href="https://www.cornell.edu/">Cornell University</a></div>
      <div>currently looking for work</div>
    </div>
  );
}
