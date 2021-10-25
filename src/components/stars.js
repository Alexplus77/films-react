import React from "react";
import Star from "./star";
import shortid from "shortid";

const Stars = ({ count }) => {
  let countStars = [];
  while (countStars.length !== count) {
    countStars.push(0);
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {countStars.map((star) => (
        <li key={shortid.generate()}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

export default Stars;
