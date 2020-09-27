import React from "react";

export default function MenuItem({ menuItem, updateCurrentOrder }) {
  const renderOptions = () => {
    return menuItem.options.map((option, i) => <div key={`option.size${i}`}>
      Size: {option.size}
      Price: {option.price}
      <button onClick={() => updateCurrentOrder({"item": menuItem.item, ...{option}})}>Add To Order</button>
    </div>);
  };
  return (
    <div className="option">
      <h2>{menuItem.item}</h2>
      <h3>Options: </h3>
      <br />
      <h4>{menuItem.options.length && renderOptions()}</h4>
    </div>
  );
}
