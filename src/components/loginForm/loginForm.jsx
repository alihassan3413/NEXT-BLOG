"use client";

import { login } from "@/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  //   useEffect(() => {
  //     state?.success && router.push("/");
  //   });
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login with Credentials</button>

      <div className=" text-red-500">{state?.error}</div>

      <Link href="/register">
        Don't Have An Account? <b>Register</b>
      </Link>
    </form>
  );
}

export default LoginForm;
