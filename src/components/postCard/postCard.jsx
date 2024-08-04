import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
function postCard({ post }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
          <span className={styles.date}>01.01.2024</span>
        </div>

        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title}</h1>
          <h1 className={styles.description}>{post.desc}</h1>
          <Link className={styles.link} href={`/blog/${post.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}

export default postCard;
