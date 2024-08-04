import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

async function Postuser({ userId }) {
  // Fetch user data server-side
  const user = await getUser(userId);

  // Return the component with fetched data
  return (
    <div className={styles.container}>
      <Image
        src={user.img || "/noavatar.png"}
        className={styles.avatar}
        alt=""
        width={50}
        height={50}
      />

      <div className={styles.text}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>{user.username}</span>
      </div>
    </div>
  );
}

export default Postuser;
