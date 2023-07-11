import { useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);

  function toggle() {
    setModal(!modal);
  }

  function setModalFalse() {
    setModal(false);
  }

  return { setModalFalse, toggle, modal };
};

export default useModal;
