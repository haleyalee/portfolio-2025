import React from "react";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section className={styles.home} id="#">
      <div>front-end developer based in NYC</div>
      <div>
        previously at <a href="https://www.cognizant.com/us/en" target="_blank">Cognizant</a> and alumna of <a href="https://www.cornell.edu/" target="_blank">Cornell University</a>
      </div>
      <div>currently looking for work~</div>
    </section>
  );
}
