import React from "react";
import "./Entry.scss";

export const Entry = ({ item, color }) => {
  const { writer } = item;
  return (
    <div className="entry-container" data-test="entry">
      <span className={`writer ${color}`}>{writer.penName}:</span>{" "}
      <span className="entry">{item.content}</span>
    </div>
  );
};
