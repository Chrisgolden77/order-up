import React, { useEffect, useState } from "react";

import MenuItem from "../molecules/MenuItem";
import { getMenu } from "../utilities/requests";

export default function Menu({ updateCurrentOrder }) {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuResponse = await getMenu();
    setMenu(menuResponse);
  };
  const renderMenuItems = () => {
    return menu.map((menuItem, i) => (
      <MenuItem
        key={`${menuItem.item}${i}`}
        menuItem={menuItem}
        updateCurrentOrder={(newItem) => updateCurrentOrder(newItem)}
      />
    ));
  };

  return (
    <div className="menu-page page-section">
      <h1>Menu</h1>
      <div className="page-item-area">{menu && renderMenuItems()}</div>
    </div>
  );
}
