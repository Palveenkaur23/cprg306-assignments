
import React from "react";

function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    onSelect({ name, quantity, category });
  };

  return (
    <div onClick={handleClick}>
      <li className="p-2 m-4 bg-slate-900 hover:bg-orange-800 cursor-pointer max-w-sm">
        <h2 className="text-xl text-white font-bold">{name}</h2>
        <div className="text-sm text-white">
          Purchase {quantity} of this item in the {category} category
        </div>
      </li>
    </div>
  );
}

export default Item;
