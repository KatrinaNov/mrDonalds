import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {GlobalStyle} from './Components/Styles/GlobalStyle';
import {NavBar} from './Components/Navbar/NavBar';
import {Menu} from './Components/Menu/Menu';
import {ModalItem} from './Components/Modal/ModalItem';
import {Order} from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context} from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyBe-lpiNAifsS3hw2IjO1qCL3PyO4j1AAc",
  authDomain: "mrdonalds-e377d.firebaseapp.com",
  databaseURL: "https://mrdonalds-e377d.firebaseio.com",
  projectId: "mrdonalds-e377d",
  storageBucket: "mrdonalds-e377d.appspot.com",
  messagingSenderId: "690794062331",
  appId: "1:690794062331:web:bcdeec12a09f95c331eb5e",
  measurementId: "G-8K43PRH85B"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem(); // хук
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem); // хук

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase: firebase.database
    }}>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu /> 
        {/* если есть openItem  */}
      {openItem.openItem && <ModalItem />}  
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
