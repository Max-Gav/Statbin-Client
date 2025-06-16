import React from "react";
import { Button } from "react-bootstrap";

const TopItemsPageLoadMoreButton = ({page, setPage}) => {
  return (
    <>
      {page == 0 && (
        <Button
          variant="dark"
          className="py-3 fs-5"
          onClick={() => {
            setPage((lastValue) => lastValue + 1);
          }}
        >
          Load More
        </Button>
      )}
    </>
  );
};

export default TopItemsPageLoadMoreButton;
