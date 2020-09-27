import React, { useEffect, useState } from "react";

import MenuItem from '../molecules/MenuItem';
import { getMenu } from "../utilities/requests";

export default function Menu({ updateCurrentOrder }) {
  const [menu, setMenu] = useState({});
  useEffect(() => fetchMenu(), []);

  const fetchMenu = async () => {
    const menuResponse = await getMenu();
    setMenu(menuResponse);
  };
  const renderMenuItems = () => {
    return menu.map(menuItem => <MenuItem menuItem={menuItem} updateCurrentOrder={newItem => updateCurrentOrder(newItem)}/>);
  }
  const renderMenu = () => {
    if (menu.length) {
      return menu.map((menuItem) => (
        <div>
          <h2>{menuItem.item}</h2>
          <h3>Options: </h3>
          <ul>
            {renderMenuItems()}
          </ul>
        </div>
      ));
    }
  };
  return (
    <div>
      <h1>Menu</h1>
      <ul>{menu && renderMenu()}</ul>
    </div>
  );
}
