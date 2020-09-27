import React from "react";

export default function Order({ currentOrder }) {
  const renderCurrentOrder = () => {
    return currentOrder.items ? (
      currentOrder.items.map((item) => <li>Item: {item.item}</li>)
    ) : (
      <li>No Items On Order Yet.</li>
    );
  };
  return (
    <div>
      <ul>{currentOrder && renderCurrentOrder()}</ul>
    </div>
  );
}
