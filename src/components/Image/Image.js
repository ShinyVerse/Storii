import React from "react";

import "./Image.scss";

export const Image = ({ src, alt, type }) => {
  const className = type ? type : "avatar";

  return <img src={src} alt={alt} className={className} data-test="image" />;
};
