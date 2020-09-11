import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import trashImg from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunctions';
import { Context } from '../Functions/context';

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;
const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;
const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background: transparent url(${trashImg}) no-repeat center/cover;
  cursor: pointer;
`;
const Toppings = styled.div`
  color: #9a9a9a;
  font-size: 14px;
  width: 100%;
`;

export const OrderListItem = ({ order, index, deleteItem }) => {

  const {openItem: {setOpenItem}} = useContext(Context);
  const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ');
// чтобы на кнопку Удалить не открывалась модалка
  const refDeleteButton = useRef(null);

  return (
    <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
      <ItemName>{order.name} {order.choice}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)}/>
      {topping && <Toppings>Допы: {topping}</Toppings>}
    </OrderItemStyled>
  )
};