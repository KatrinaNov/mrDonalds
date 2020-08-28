import React from 'react';
import {GlobalStyle} from './Components/Styles/GlobalStyle'
import {NavBar} from './Components/Navbar/NavBar';
import {Menu} from './Components/Menu/Menu';
import {ModalItem} from './Components/Modal/ModalItem';
import {Order} from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';



function App() {

  const openItem = useOpenItem(); // хук
  const orders = useOrders(); // хук

  console.log('Item', openItem);
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}/>
      <Menu {...openItem}/> 
        {/* если есть openItem  */}
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}  
    </>
  );
}

export default App;
