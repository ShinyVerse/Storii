import React from "react";

export const Entry = ({ item }) => {
  const { writer } = item;
  return (
    <div data-test="entry">
      {writer.penName}: {item.content}
    </div>
  );
};
