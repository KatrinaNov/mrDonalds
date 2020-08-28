import React from 'react';
import styled from 'styled-components';
import {Button} from '../Interface/Button';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: #fff;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-basis: auto;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background: black url(${({img}) => img}) center/cover;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`;


export const ModalItem = ({ openItem, setOpenItem, orders, setOrders}) => {

  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    // закроем модальное окно
    setOpenItem(null);
  };
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <ModalTitle>
          {openItem.name}
          <span>{openItem.price.toLocaleString('ru-Ru', {style: 'currency', currency: 'RUB'})}</span>
        </ModalTitle>
        <Button onClick={addToOrder}>Добавить</Button>
      </Modal>
    </Overlay>
  );
};
