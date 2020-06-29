import React from "react";
import "./Entry.scss";

export const Entry = ({ item, color, canUpdate }) => {
  const { writer } = item;
  return (
    <div className="entry-container" data-test="entry">
      <span className={`writer ${color}`}>{writer.penName}:</span>{" "}
      <span className="entry">{item.content}</span>
      {canUpdate && <button>Delete</button>}
    </div>
  );
};
