import React from "react";
import styles from "./RecentlyPlayedItem.module.css";
import LastPlayedItemButtons from "./Recently Played Item Components/RecentlyPlayedItemButtons";
import LastPlayedItemDetails from "./Recently Played Item Components/RecentlyPlayedItemDetails";
import LastPlayedItemIndex from "./Recently Played Item Components/RecentlyPlayedItemIndex";
import LastPlayedItemImage from "./Recently Played Item Components/RecentlyPlayedItemImage";

const LastPlayedItem = ({ item:track, itemIndex }) => {
  return (
    <div className="row">
      <LastPlayedItemIndex itemIndex={itemIndex} />
      <div
        className={
          `d-flex flex-sm-row flex-column align-items-center text-sm-start text-center gap-3 p-2 col-sm-11 col-10 ` +
          styles.last_played_item_container
        }
      >
        <LastPlayedItemImage trackData={track.track} />
        <LastPlayedItemDetails track={track} />
        <LastPlayedItemButtons trackData={track.track} />
         
      </div>
    </div>
  );
};

export default LastPlayedItem;
