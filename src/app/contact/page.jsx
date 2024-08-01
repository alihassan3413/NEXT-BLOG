import Image from "next/image";
import styles from "./contact.module.css";
function ContactPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact image loading..."
            fill
            className={styles.img}
          />
        </div>

        <div className={styles.inputContainer}>
          <form action="" className={styles.form}>
            <input
              placeholder="Name and Surname"
              type="text"
              className={styles.nameInput}
            />
            <input
              placeholder="Email Address"
              type="email"
              className={styles.nameInput}
            />
            <input
              placeholder="Phone Number (optional)"
              type="text"
              className={styles.nameInput}
            />
            <textarea
              placeholder="Message"
              type="paragraph"
              className={styles.nameInput}
            />

            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
