import React from "react";
import Star from "./star";
import shortid from "shortid";

const Stars = ({ count }) => {
  return (
    count > 5 ||
    count < 1 || (
      <ul className="card-body-stars u-clearfix">
        {[...new Array(count).fill(0)].map(() => (
          <li key={shortid.generate()}>
            <Star />
          </li>
        ))}
      </ul>
    )
  );
};

export default Stars;
