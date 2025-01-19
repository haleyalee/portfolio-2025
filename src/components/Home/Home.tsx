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

      {/* <div>front-end developer based in NYC</div> */}
      {/* <div>
        previously at <a href="https://www.cognizant.com/us/en" target="_blank">Cognizant</a> and alumna of <a href="https://www.cornell.edu/" target="_blank">Cornell University</a>
      </div> */}
      {/* <div>currently looking for work~</div> */}
    </section>
  );
}
