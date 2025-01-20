import React from "react";
import styles from "./Home.module.scss";
import * as motion from "motion/react-client";

export default function Home() {

  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.075, when: "beforeChildren" } }
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
  };

  const introText = [
    "front-end developer based in NYC",
    "previously at Cognizant and alumna of Cornell University",
    "currently looking for work~"
  ]

  return (
    <section className={styles.home} id="#">
      <motion.div
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        className={styles.typewriter}
      >
        {introText.map((text, i) => 
          <div
            key={`${text}-${i}`}
          >
            {text.split("").map((char, i) => 
              <motion.span key={`${char}-${i}`} variants={letterVariants}>
                {char}
              </motion.span>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
}
