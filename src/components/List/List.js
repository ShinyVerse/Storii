import React from "react";

import "./List.scss";
const colorMap = {};
const colors = ["pink", "red", "green", "blue", "orange"];

const canUpdate = (users, writerId) => {
  return users.includes(writerId);
};

export const List = ({ items, Component, refName, authorisedUsers }) => {
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
            canUpdate={canUpdate(authorisedUsers, item.writer._id)}
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
