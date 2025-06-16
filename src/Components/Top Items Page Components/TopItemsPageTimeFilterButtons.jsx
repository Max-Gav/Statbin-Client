import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { MusicPreviewControlContext } from "../../AppContext";

const TopItemsPageTimeFilterButtons = ({
  timeRange,
  setTimeRange,
}) => {
  const { setIsPlayingAnyPreview } = useContext(MusicPreviewControlContext);

  //Resetting the isPlayingAnyPreview value each time the timeRange is changed
  useEffect(()=>{setIsPlayingAnyPreview(false)},[timeRange])

  return (
    <div className="d-flex gap-3">
      <Button
        variant={timeRange == "short" ? "success" : "dark"}
        onClick={() => {
          setTimeRange("short");
        }}
      >
        4 Weeks
      </Button>
      <Button
        variant={timeRange == "medium" ? "success" : "dark"}
        onClick={() => {
          setTimeRange("medium");
        }}
      >
        6 Months
      </Button>
      <Button
        variant={timeRange == "long" ? "success" : "dark"}
        onClick={() => {
          setTimeRange("long");
        }}
      >
        All Time
      </Button>
    </div>
  );
};

export default TopItemsPageTimeFilterButtons;
