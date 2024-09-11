import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

const Modal = ({ isOpen, setOpen, children, title }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("modal-overlay")) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.body.classList.add("modal-open"); // Prevent body scrolling
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.classList.remove("modal-open"); // Clean up on unmount
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, setOpen]);

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`}>
      <dialog open={isOpen} className="modal-dialog">
        <div className="dialog-header">
          <h2 className="no-margin-top no-margin-bottom">{title}</h2>
          <FontAwesomeIcon
            icon={faXmark}
            className="icon icon-action selectable close-dialog"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="modal-content">

        {children}
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
