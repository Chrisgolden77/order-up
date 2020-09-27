import React, {useEffect, useState} from 'react';
import './App.css';

import Order from './modules/Order';
import Menu from './modules/Menu';


function App() {
  const [currentOrder, setCurrentOrder] = useState([]);
 
  const updateCurrentOrder = ({orderItem, updateMethod}) => {
    let currentItems;
    if(updateMethod === 'add') currentItems = currentOrder.concat(orderItem);
    if(updateMethod === 'remove') currentItems = currentItems.filter(item => orderItem.id === item.id);
    setCurrentOrder(currentItems);
    return;
  }
  return (
    <div className="App">
      <h1 className="header">Order UP</h1>
      <Order 
        className='order-page' 
        currentOrder={currentOrder}
        updateCurrentOrder={item => updateCurrentOrder({orderItem: item, updateMethod: 'remove'})}
        />
      <Menu 
        className='menu-page' 
        updateCurrentOrder={newItem => updateCurrentOrder({orderItem: newItem, updateMethod: 'add'})}
        />
    </div>
  );
}

export default App;
