"use client";

const { default: Link } = require("next/link");
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink";
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

      <button
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      >
        Menu
      </button>
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
