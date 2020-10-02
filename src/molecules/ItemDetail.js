import React from "react";

export default function ItemDetail({ foodItem, buttonAction, buttonText }) {
  return (
    <div className="food-item">
        {foodItem.item && (
          <h2 style= {{margin: "auto 0"}}>
            {foodItem.item}: 
          </h2>
        )}
      Size: {foodItem.size.toUpperCase()}
      <br />
      Price: ${parseFloat(foodItem.price * 1.0).toFixed(2)}
      <button onClick={() => buttonAction(foodItem)}>{buttonText}</button>
    </div>
  );
}
