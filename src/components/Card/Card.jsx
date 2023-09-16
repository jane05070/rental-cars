import { useState } from "react";
import CarImage from "./CarImg/CarImg";
import CardInfo from "./CardInfo/CardInfo";
import { CardButton, CardWrapper } from "./Card.styled";
import Modal from "./../Modal/Modal";

const Card = ({ car }) => {
  const { id, img, make, model } = car;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    document.body.classList.remove("modal-open");
  };

  const handleCardBtnClick = () => {
    toggleModal(id);
    document.body.classList.add("modal-open");
  };

  return (
    <CardWrapper>
      <CarImage imageURL={img} alt={`${make} ${model}`} id={id} />
      <CardInfo data={car} />
      <CardButton onClick={handleCardBtnClick}>Learn more</CardButton>
      {showModal && <Modal onClose={toggleModal} car={car}></Modal>}
    </CardWrapper>
  );
};

export default Card;