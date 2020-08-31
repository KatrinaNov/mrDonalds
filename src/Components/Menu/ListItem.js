import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunctions';


const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background: ${({ img }) => `url(${img})` } center/cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: white;
  z-index: 1;
  font-size: 30px;
  transition-property: box-shadow;
  transition-duration: 0.3s;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    opacity: 30%;
    z-index: -1;    
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20px 2px #299B01;
  }
`;

export const ListItem = ({ itemList, setOpenItem}) => (
  <List>
    {itemList.map(item => (
      <Item 
        key={item.id} 
        img={item.img}
        onClick={() => setOpenItem(item)}
      >
        <p>{item.name}</p>
        <p>{formatCurrency(item.price)}</p>
      </Item>
    ))}
  </List>
);