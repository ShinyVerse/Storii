import React from "react";
import PropTypes from "prop-types";

export const Entry = ({ penName, content }) => {
  return (
    <div data-test="entry">
      {penName}: {content}
    </div>
  );
};

Entry.propTypes = {
  penName: PropTypes.string.isRequired,
  content: PropTypes.string,
};
