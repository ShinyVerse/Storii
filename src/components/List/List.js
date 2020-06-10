import React from "react";

export const List = ({ items, Component, itemName }) => {
  return (
    <div data-test="list">
      {items.map((item, index) => (
        <Component
          data-test="list-item"
          key={`list-item-${index}`}
          item={item}
        />
      ))}
    </div>
  );
};

List.defaultProps = {
  items: [],
};
