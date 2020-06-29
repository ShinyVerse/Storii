import React from "react";
import "./Entry.scss";

export const Entry = ({ item, color, canUpdate, handleDelete }) => {
  const { writer, _id } = item;
  return (
    <div className="entry-container" data-test="entry">
      <span className={`writer ${color}`}>{writer.penName}:</span>{" "}
      <span className="entry">{item.content}</span>
      {canUpdate && (
        <button
          onClick={() => {
            console.log(handleDelete);

            handleDelete(_id);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};
