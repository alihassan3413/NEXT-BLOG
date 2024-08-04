import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About page description",
};
function AboutPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>About Agency</h2>
          <h1 className={styles.subtitle}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.description}>
            We create digital ideas that are bigger, bolder, braver and
            better.We believe in good ideas and flexibility and precission We're
            world's Our Special Team best consulting & finance ideas solution
            provider. Wide range of web and software development.
          </p>

          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>

            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="/about.png"
            alt="About image loading..."
            fill
            className={styles.img}
          />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
