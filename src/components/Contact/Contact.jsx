import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Modal from "react-modal";
import s from "./Contact.module.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";

Modal.setAppElement("#root");

const Contact = ({ contactInfo }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateContact, setUpdateContact] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "scroll";
    return () => {};
  }, [modalIsOpen]);

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
        className={s.modal}
        overlayClassName={s.overlay}
        // style={customStyles}
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
