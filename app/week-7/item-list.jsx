"use client";
import Item from "./item";
import React, { useState } from "react";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSortBy = (criteria) => {
    if (sortBy !== criteria) {
      setSortBy(criteria);
    }
  };

  return (
    <div className="mt-8 text-white">
      <div>
        <label htmlFor="sort">Sort by: </label>
        <button
          onClick={() => handleSortBy("name")}
          className={`p-1 m-2 w-28 ${
            sortBy === "name" ? "bg-orange-400" : "bg-orange-500"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => handleSortBy("category")}
          className={`p-1 m-2 w-28 ${
            sortBy === "category" ? "bg-orange-400" : "bg-orange-500"
          }`}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
