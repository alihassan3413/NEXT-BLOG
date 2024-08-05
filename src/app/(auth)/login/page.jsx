import { githubLogin } from "@/lib/actions";
import { signIn } from "@/lib/auth";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";

function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form className={styles.form} action={githubLogin}>
            <button type="submit" className={styles.button}>
              Login with GitHub
            </button>
          </form>

          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
