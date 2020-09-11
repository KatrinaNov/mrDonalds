import React, { useContext } from 'react';
import styled from 'styled-components';
import {OrderTitle, Total, TotalPrice} from '../Styles/CommonStyles';
import { Button } from '../Interface/Button';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunctions';
import { Context } from '../Functions/context';

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  background: #fff;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const OrderContent = styled.div`
  flex-grow: 1;
`;
const EmptyList = styled.p`
  text-align: center;
`;

export const Order = () => {
  const {
      orders: {orders, setOrders},
      auth: {authentication, logIn},
      orderConfirm: {setOpenOrderConfirm}
    } = useContext(Context);

  // удаление элемента
  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  const total = orders.reduce((result, order) => totalPriceItems(order) + result , 0);

  const totalCounter = orders.reduce((result, order) => order.count + result , 0);
  return (
    <OrderStyled>
     <OrderTitle>Ваш заказ</OrderTitle>
     <OrderContent>
       {orders.length ? 
       <ul>
         {orders.map((order, index) => <OrderListItem 
                                          order={order} 
                                          key={index} 
                                          deleteItem={deleteItem}
                                          index={index}/> )}
       </ul> : 
       <EmptyList>Список заказов пуст</EmptyList>}
     </OrderContent>
     {orders.length ? 
       <>
        <Total>
          <span>Итого</span>
          <span>{totalCounter}</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <Button onClick={() => {
          if (authentication) {
            setOpenOrderConfirm(true);
          } else {
            logIn();
          }
          }}>Оформить
        </Button>
     </> :
     null
     }
    </OrderStyled>
  );
}