import React, { useContext } from 'react';
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
import { Context } from '../Functions/context';
import {Overlay} from '../Styles/CommonStyles';

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

export const ModalItem = () => {
  const {
    openItem: { openItem, setOpenItem }, 
    orders: {orders, setOrders}  
  } = useContext(Context);

  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

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

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  }

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
        <Button 
          onClick={isEdit ? editOrder : addToOrder} 
          disabled={order.choices && !order.choice}>{isEdit ? 'Редактировать' : 'Добавить'}</Button>
      </Modal>
    </Overlay>
  );
};
