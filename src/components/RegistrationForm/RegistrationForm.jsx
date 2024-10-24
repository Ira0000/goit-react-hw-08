import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { selectError } from "../../redux/auth/selectors";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const passwordFieldId = useId();
  const emailFieldId = useId();
  const nameFieldId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };
  const error = useSelector(selectError);
  useEffect(() => {
    if (error) {
      toast.error("Such user already exists!");
    }
  }, [error]);
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
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
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div className={s.formFieldWrapper}>
            <label className={s.label} htmlFor={nameFieldId}>
              <span className="label-text">Name</span>
            </label>
            <Field
              type="text"
              placeholder="name"
              name="name"
              className={s.input}
              id={nameFieldId}
            />
            <ErrorMessage
              name="name"
              className={s.errorMessage}
              component="span"
            />
          </div>
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
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
