import Image from "next/image";
import styles from "./singlePost.module.css";
function SignlePostPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/27298696/pexels-photo-27298696/free-photo-of-a-swan-is-standing-on-the-ice-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image
              src="https://images.pexels.com/photos/27298696/pexels-photo-27298696/free-photo-of-a-swan-is-standing-on-the-ice-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className={styles.avatar}
              alt=""
              width={50}
              height={50}
            />

            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>John Doe</span>
            </div>

            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>24.06.2004</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            repellat placeat quibusdam magnam omnis laborum, eum ratione impedit
            reiciendis natus velit molestias atque enim doloribus animi unde
            pariatur. Ex, adipisci.
          </div>
        </div>
      </div>
    </>
  );
}

export default SignlePostPage;
