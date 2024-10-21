import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

import s from "./ContactsPage.module.css";
import { Toaster } from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.contactsPageWrapper}>
      <ContactForm />
      <div className={s.contactsWrapper}>
        <SearchBox />
        <ContactList />
      </div>
      <Toaster position="top-left" reverseOrder={false} />
    </div>
  );
};

export default ContactsPage;
