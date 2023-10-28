import React from "react";

const LastPlayedItemIndex = ({ itemIndex }) => {
  return (
    <div className="d-flex align-items-center justify-content-end pe-3 col-sm-1 col-2">
      <span className="fs-2 text-white text-sm-start text-center">
        {itemIndex}
      </span>
    </div>
  );
};

export default LastPlayedItemIndex;
