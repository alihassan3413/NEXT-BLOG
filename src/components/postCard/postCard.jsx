import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
function postCard() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image
              src="https://images.pexels.com/photos/27298696/pexels-photo-27298696/free-photo-of-a-swan-is-standing-on-the-ice-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              className={styles.img}
            />
          </div>
          <span className={styles.date}>01.01.2024</span>
        </div>

        <div className={styles.bottom}>
          <h1 className={styles.title}>Title</h1>
          <h1 className={styles.description}>desc</h1>
          <Link className={styles.link} href="/blog/post">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}

export default postCard;
