import React from "react";
import "./Entry.scss";

export const Entry = ({ item, color }) => {
  const { writer } = item;
  return (
    <div className="entry" data-test="entry">
      <span className={`writer ${color}`}>{writer.penName}:</span>{" "}
      {item.content}
    </div>
  );
};
