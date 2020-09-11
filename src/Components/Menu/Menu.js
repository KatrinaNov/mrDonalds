import React, { useContext } from 'react';
import styled from 'styled-components';
import  '../Styles/GlobalStyle'
import {ListItem} from './ListItem';
import {Banner} from './Banner';
import { useFetch} from '../Hooks/useFetch';
import { Context } from '../Functions/context';


const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;
const SectionMenu = styled.section`
  padding: 15px;
  text-align: center;
`;

// preloader
const PanLoader = styled.div`
  width: 180px;
  height: 180px;
  margin: 100px auto;
`;


const Loader = styled.div`
  position: relative;
  top: 10%;
  left: 0;
  width: 60%;
  height: 45%;
  border: 10px solid transparent;
  border-bottom: 10px solid #f87d17;
  border-radius: 50%;
  animation: loader 2s infinite;
  animation-timing-function: linear;
`;
const PanContainer = styled.div`
  display:flex;
  width: 100%;
  animation: pan 2s infinite;
`;
const Pan = styled.div`
  width: 60%;
  height: 20px;
  background: linear-gradient(#40db09, #299B01);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;
const Handle = styled.div`
  width: 40%;
  height: 10px;
  background: linear-gradient(#40db09, #299B01);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const Shadow = styled.div`
  position: relative;
  top: 15%;
  left: 15%;
  width: 30%;
  height: 8px;
  background: #000;
  opacity: 0.1;
  border-radius: 20px;
  animation: shadow 2s infinite;
`;


export const Menu = () => {
  const {openItem: { setOpenItem }} = useContext(Context);
  const res = useFetch();
  const dbMenu = res.response;
  return (
    <MenuStyled>
    <Banner />    
    {res.response ? 
     <>
       <SectionMenu>
      <h2>Бургер</h2>
      <ListItem 
        itemList={dbMenu.burger}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem 
        itemList={dbMenu.other}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>
     </> : res.error ?
     <div>Sorry, we will fix it</div>
     :
     <PanLoader>
      <Loader/>
      <PanContainer>
        <Pan/>
        <Handle/>
      </PanContainer>
      <Shadow />
    </PanLoader>
    }
  </MenuStyled>
  );
};