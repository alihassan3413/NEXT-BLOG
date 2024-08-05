import { auth } from "@/lib/auth";
import Links from "./links/Links";
import styles from "./navbar.module.css";

export default async function NavBar() {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <Links session={session} />
    </div>
  );
}
