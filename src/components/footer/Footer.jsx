import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>Beeg</div>
        <div className={styles.text}>Beeg creative thoughts agency.</div>
      </div>
    </>
  );
}

export default Footer;
