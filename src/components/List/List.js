import React from "react";

import "./List.scss";

export const List = ({ items, Component }) => {
  const colorMap = {};
  const colors = ["pink", "red", "green", "blue", "orange"];

  return (
    <div className="list" data-test="list">
      {items.map((item, index) => {
        const penName = item.writer.penName;
        if (colorMap[penName] === undefined) {
          colorMap[item.writer.penName] = colors.pop();
        }
        return (
          <Component
            data-test="list-item"
            key={`list-item-${index}`}
            item={item}
            color={colorMap[penName]}
          />
        );
      })}
    </div>
  );
};

List.defaultProps = {
  items: [],
};
