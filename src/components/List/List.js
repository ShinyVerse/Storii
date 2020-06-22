import React from "react";

import "./List.scss";
const colorMap = {};
const colors = ["pink", "red", "green", "blue", "orange"];

export const List = ({ items, Component, refName }) => {
  items.map((item) => {
    const penName = item.writer.penName;
    if (colorMap[penName] === undefined) {
      colorMap[item.writer.penName] =
        colors[Math.floor(Math.random() * colors.length)];
    }
  });
  return (
    <div className="list" data-test="list">
      {items.map((item, index) => {
        const penName = item.writer.penName;
        return (
          <Component
            data-test="list-item"
            key={`list-item-${index}`}
            item={item}
            color={colorMap[penName]}
          />
        );
      })}

      <div id="bottomOfEntries" ref={refName} />
    </div>
  );
};

List.defaultProps = {
  items: [],
};
