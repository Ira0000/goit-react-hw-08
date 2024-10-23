import { useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectError } from "../../redux/auth/selectors";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import toast from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();
  const passwordFieldId = useId();
  const emailFieldId = useId();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  const error = useSelector(selectError);
  useEffect(() => {
    if (error) {
      toast.error("Not correct e-mail or password!");
    }
  }, [error]);
  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
  });
  return (
    <div className={s.card}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div className={s.formFieldWrapper}>
            <label className={s.label} htmlFor={emailFieldId}>
              <span className="label-text">Email</span>
            </label>
            <Field
              type="email"
              placeholder="email"
              name="email"
              className={s.input}
              id={emailFieldId}
            />
            <ErrorMessage
              name="email"
              className={s.errorMessage}
              component="span"
            />
          </div>
          <div className={s.formFieldWrapper}>
            <label className={s.label} htmlFor={passwordFieldId}>
              <span className="label-text">Password</span>
            </label>
            <Field
              type="password"
              placeholder="password"
              name="password"
              className={s.input}
              id={passwordFieldId}
            />
            <ErrorMessage
              name="password"
              className={s.errorMessage}
              component="span"
            />
          </div>
          <button type="submit" className={s.loginBtn}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
