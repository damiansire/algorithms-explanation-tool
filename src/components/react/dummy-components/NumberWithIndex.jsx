import React from "react";

const NumberWithIndex = ({ number, subIndex }) => {
  return (
    <div className="relative">
      <span>{number}</span>
      <span class="text-xs top-3 left-2 absolute">{subIndex}</span>
    </div>
  );
};

export default NumberWithIndex;
