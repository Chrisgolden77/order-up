import React from "react";

import ItemDetail from "../molecules/ItemDetail";

export default function Order({ currentOrder, updateCurrentOrder }) {
  const renderCurrentOrder = () => {
    return currentOrder.items.length ? (
      currentOrder.items.map((orderItem, i) => (
        <ItemDetail
          buttonAction={() => updateCurrentOrder(orderItem)}
          buttonText="Remove"
          key={`order${orderItem.item}${i}`}
          foodItem={orderItem}
        />
      ))
    ) : (
      <div className="center-floating-text">
        <strong>...There are no Items on this order yet</strong>
      </div>
    );
  };
  return (
    <div className="order-page page-section">
      <h1>Total: {(currentOrder.total * 1.0).toFixed(2)}</h1>
      <h4 className="page-item-area">{renderCurrentOrder()}</h4>
      <footer className="order-total"></footer>
    </div>
  );
}
