import React from 'react';
import styled from 'styled-components';
import {Button} from '../Interface/Button';
import {CountItem} from './CountItem';
import {useCount} from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';
import { Toppings } from './Toppings';
import { Choices} from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';



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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
  justify-content: space-around;
`;
const TotalPriceItem = styled.div`
display: flex;
justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders}) => {

  const counter = useCount();
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);

  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
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
          <span>{formatCurrency(openItem.price)}</span>
        </ModalTitle>
        <ModalContent>
          <CountItem {...counter}/>
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem}/>}
          <TotalPriceItem>
            <span>Цена</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
        </ModalContent>        
        <Button onClick={addToOrder} disabled={order.choices && !order.choice}>Добавить</Button>
      </Modal>
    </Overlay>
  );
};
