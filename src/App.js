import React, {useState} from 'react';
import './App.css';

import Order from './modules/Order';

function App() {
  const currentOrder = useState({items: []});

  return (
    <div className="App">
      <Order className='order-page' currentOrder/>
    </div>
  );
}

export default App;
