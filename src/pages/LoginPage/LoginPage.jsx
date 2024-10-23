import s from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={s.loginPage}>
      <div className={s.loginContent}>
        <LoginForm />
        <div className={s.textWrapper}>
          <h1 className={s.header}>Login now!</h1>
          <p className={s.text}>
            Want to unlock the full potential of our app? Log in now to discover
            exclusive benefits, access personalized features, and easily manage
            your contacts. With our user-friendly interface, you can
            effortlessly add, delete, and create contacts with phone numbers.
            Don't miss out on the exciting opportunities and advantages that
            await you. Log in today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
