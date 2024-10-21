import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import { selectFilterInvalid } from "../../redux/filters/selectors";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const invalidFilterValue = useSelector(selectFilterInvalid);
  const filteredData = useSelector(selectFilteredContacts);

  return (
    <>
      {loading && <Loader />}
      {error && <h2>Something went wrong!</h2>}
      {!invalidFilterValue && filteredData.length > 0 ? (
        <ul className={s.contactCard}>
          {filteredData.map((data) => {
            return (
              <li key={data.id}>
                <Contact contactInfo={data} />
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>No results found</h2>
      )}
    </>
  );
};

export default ContactList;
