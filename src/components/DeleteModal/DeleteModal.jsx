import s from "./DeleteModal.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import UpdateForm from "../UpdateForm/UpdateForm";
import { IoCloseOutline } from "react-icons/io5";

const DeleteModal = ({ closeModal, contactInfo, updateContact }) => {
  const dispatch = useDispatch();
  console.log(contactInfo);

  const handleDeleteContact = () => {
    dispatch(deleteContact(contactInfo.id));
    closeModal();
    toast.success("Contact deleted!");
  };

  return (
    <div className={s.wrapper}>
      {updateContact ? (
        <>
          <button className={s.close} onClick={closeModal}>
            <IoCloseOutline className={s.icon} />
          </button>
          <h2>Update contact info below</h2>
          <UpdateForm contactInfo={contactInfo} closeModal={closeModal} />
        </>
      ) : (
        <>
          <h2 className={s.header}>
            Are you sure you want to delete this contact?
          </h2>
          <div className={s.btnWrapper}>
            <button
              type="button"
              onClick={handleDeleteContact}
              className={s.btn}
            >
              Yes
            </button>
            <button type="button" onClick={closeModal} className={s.btn}>
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DeleteModal;
