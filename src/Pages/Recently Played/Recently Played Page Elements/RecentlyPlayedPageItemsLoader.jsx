import React from "react";
import LastPlayedItem from "../../../Components/Last Played Item/LastPlayedItem";

const RecentlyPlayedPageItemsLoader = ({tracks}) => {
  return (
    <>
      {tracks.map((track, itemIndex) => {
        return (
          <LastPlayedItem
            track={track}
            itemIndex={itemIndex + 1}
            key={itemIndex + 1}
          />
        );
      })}
    </>
  );
};

export default RecentlyPlayedPageItemsLoader;
