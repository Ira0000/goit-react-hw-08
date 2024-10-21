import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Modal from "react-modal";
import s from "./Contact.module.css";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contacts/operations";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";
import { GrUpdate } from "react-icons/gr";

Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    backgroundColor: "rgb(7 7 7 / 80%)",
  },
  content: {
    top: "35%",
    right: "32%",
    bottom: "20%",
    left: "32%",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
};

const Contact = ({ contactInfo }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateContact, setUpdateContact] = useState(false);

  const openDeleteModal = () => {
    setUpdateContact(false);
    setIsOpen(true);
  };

  const openUpdateModal = () => {
    setUpdateContact(true);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={s.contactWrapper}>
      <ul className={s.infoList}>
        <li className={s.infoItem}>
          <IoMdPerson /> <p>{contactInfo.name}</p>
        </li>
        <li className={s.infoItem}>
          <FaPhoneAlt /> <p>{contactInfo.number}</p>
        </li>
      </ul>
      <div className={s.btnWrapper}>
        <button type="button" className={s.deleteBtn} onClick={openDeleteModal}>
          <p>Delete</p>
          <ImBin />
        </button>
        <button type="button" onClick={openUpdateModal} className={s.updateBtn}>
          <p>Update</p>
          <GrUpdate />
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <DeleteModal
          contactInfo={contactInfo}
          closeModal={closeModal}
          updateContact={updateContact}
        />
      </Modal>
    </div>
  );
};

export default Contact;
