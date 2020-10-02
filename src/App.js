import React, { useState } from "react";
import "./App.css";

import Order from "./modules/Order";
import Menu from "./modules/Menu";

function App() {
  const [currentOrder, setCurrentOrder] = useState({ items: [], total: 0.0 });

  const updateCurrentOrder = ({ orderItem, updateMethod }) => {
    let currentItems;
    let currentTotal = currentOrder.total;
    switch (updateMethod) {
      case "add":
        currentItems = currentOrder.items.concat({
          uid: Date.now(),
          ...orderItem,
        });
        currentTotal += orderItem.price;
        break;
      case "remove":
        currentItems = currentOrder.items.filter(
          (item) => orderItem.uid !== item.uid
        );
        currentTotal -= orderItem.price;
        break;
      default:
        break;
    }
    setCurrentOrder({ items: currentItems, total: currentTotal });
    return;
  };
  return (
    <div className="App">
      <div className="header">
        <em>
          <h1>Order UP!</h1>
        </em>
      </div>
      <Order
        currentOrder={currentOrder}
        updateCurrentOrder={(orderItem) =>
          updateCurrentOrder({ orderItem, updateMethod: "remove" })
        }
      />
      <Menu
        updateCurrentOrder={(newItem) =>
          updateCurrentOrder({
            orderItem: newItem,
            updateMethod: "add",
          })
        }
      />
    </div>
  );
}

export default App;
