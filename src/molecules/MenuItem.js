import React from "react";

import ItemDetail from "../molecules/ItemDetail";
export default function MenuItem({ menuItem, updateCurrentOrder }) {
  const renderOptions = () => {
    return menuItem.options.map((option, i) => (
      <ItemDetail
        buttonAction={(foodItemDetail) =>
          updateCurrentOrder({ item: menuItem.item, ...foodItemDetail })
        }
        buttonText="Add To Order"
        foodItem={option}
        key={`option${i}`}
      />
    ));
  };
  return (
    <div className="menu-item">
      <h2>{menuItem.item}</h2>
      <h4>{menuItem.options.length && renderOptions()}</h4>
    </div>
  );
}
