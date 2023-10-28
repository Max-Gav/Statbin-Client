import React from "react";
import { Button } from "react-bootstrap";

const TopArtistsPageTimeFilterButtons = ({ timeRange, setTimeRange }) => {
    return (
    <div className="d-flex gap-3">
      {timeRange != "short" && (
        <Button
          variant="dark"
          onClick={() => {
            setTimeRange("short");
          }}
        >
          4 Weeks
        </Button>
      )}
      {timeRange != "medium" && (
        <Button
          variant="dark"
          onClick={() => {
            setTimeRange("medium");
          }}
        >
          6 Months
        </Button>
      )}
      {timeRange != "long" && (
        <Button
          variant="dark"
          onClick={() => {
            setTimeRange("long");
          }}
        >
          All Time
        </Button>
      )}
    </div>
  );
};

export default TopArtistsPageTimeFilterButtons;
