import React from "react";

const PageTitle = ({ title }) => {
  return (
    <h1
      className="text-white text-center"
      style={{ fontFamily: "Outfit-Black" }}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
