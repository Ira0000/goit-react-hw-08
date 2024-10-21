import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import s from "./UpdateForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
});

const UpdateForm = ({ contactInfo, closeModal }) => {
  const initialData = {
    name: contactInfo.name,
    number: contactInfo.number,
  };
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const dispatch = useDispatch();

  const handleUpdateContact = (values, actions) => {
    const contactId = contactInfo.id;
    dispatch(
      updateContact({
        contactId,
        name: String(values.name),
        number: String(values.number),
      })
    );
    // console.log(contactId);
    // console.log(values.name);
    // console.log(values.number);

    toast.success("Contact Updated!");
    actions.resetForm();
    closeModal();
  };

  return (
    <Formik
      initialValues={initialData}
      onSubmit={handleUpdateContact}
      validationSchema={contactSchema}
    >
      <Form className={s.conactForm}>
        <div className={s.formFieldWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} className={s.input} />
          <ErrorMessage
            name="name"
            component="span"
            className={s.errorMessage}
          />
        </div>
        <div className={s.formFieldWrapper}>
          <label htmlFor={numberFieldId} className={s.formLable}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            className={s.input}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={s.errorMessage}
          />
        </div>
        <button type="submit" className={s.formBtn}>
          Update
        </button>
      </Form>
    </Formik>
  );
};

export default UpdateForm;
