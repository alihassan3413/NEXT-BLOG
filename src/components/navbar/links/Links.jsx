"use client";

const { default: Link } = require("next/link");
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink";
import Image from "next/image";
const Links = () => {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "AboutPage",
      path: "/about",
    },
    {
      title: "ContactPage",
      path: "/contact",
    },
    {
      title: "BlogPage",
      path: "/blog",
    },
  ];
  const [open, setOpen] = useState(false);

  const session = false;
  const isAdmin = false;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        src="/menu.png"
        onClick={() => setOpen((prev) => !prev)}
        alt=""
        width={25}
        height={25}
        className={styles.menuButton}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
