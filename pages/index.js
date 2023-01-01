import React, { useState } from "react";
import Backdrop from "../components/Backdrop";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";

export default function Home() {
  const isStep = useSelector((state) => state.step.initialStep);
  const [showModal, setShowModal] = useState(true);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <h1>MAIN LANDING PAGE</h1>

      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal onClose={closeModalHandler} />}
    </React.Fragment>
  );
}
