import React from "react";

export const Entry = ({ item }) => {
  console.log("what does item look like", item);

  const { writer } = item;
  return (
    <div data-test="entry">
      {writer.penName}: {item.content}
    </div>
  );
};
