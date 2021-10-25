import React from "react";
import Star from "./star";
import shortid from "shortid";

const Stars = ({ count }) => {
  const countStars = [];
  countStars.fill(0, 0, count);

  return (
    count > 5 ||
    count < 1 || (
      <ul className="card-body-stars u-clearfix">
        {countStars.map(() => (
          <li key={shortid.generate()}>
            <Star />
          </li>
        ))}
      </ul>
    )
  );
};

export default Stars;
