import s from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Toaster } from "react-hot-toast";

const RegistrationPage = () => {
  return (
    <div className={s.loginPage}>
      <Toaster position="top-left" reverseOrder={false} />
      <div className={s.loginContent}>
        <RegistrationForm />
        <div className={s.textWrapper}>
          <h1 className={s.header}>Register!</h1>
          <p className={s.text}>
            Want to unlock the full potential of our app? Please register now to
            discover exclusive benefits, access personalized features, and
            easily manage your contacts. With our user-friendly interface, you
            can effortlessly add, delete, and create contacts with phone
            numbers. Don't miss out on the exciting opportunities and advantages
            that await you. Register today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
