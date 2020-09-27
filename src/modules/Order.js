import React, { useEffect, useState } from "react";

export default function Order({ currentOrder, updateOrderItem }) {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    setItemList(currentOrder);
  }, [currentOrder]);
  const renderCurrentOrder = () => {
    return itemList.length ? 
      itemList.map((item) => (
        <li>
          Item: {item.item}
          <br /> Size: {item.option.size}
          <br /> Price: {item.option.price}
        </li>
      )
    ) : (
      <li>No Items</li>
    );
  };
  return (
    <div>
      <h1>Order</h1>
      <ul>{renderCurrentOrder()}</ul>
    </div>
  );
}
