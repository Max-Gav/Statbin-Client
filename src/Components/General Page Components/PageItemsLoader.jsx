import React from "react";


const PageItemsLoader = ({ items, itemComponent:ItemComponent }) => {
  return (
      <>
        {items.map((item, itemIndex) => {
          return (
            <ItemComponent item={item} itemIndex={itemIndex + 1} key={itemIndex} />
          );
        })}
      </>
  );
};

export default PageItemsLoader;
