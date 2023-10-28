import React from "react";
import styles from "./LastPlayedItem.module.css";
import LastPlayedItemButtons from "./Last Played Item Components/LastPlayedItemButtons";
import LastPlayedItemDetails from "./Last Played Item Components/LastPlayedItemDetails";
import LastPlayedItemIndex from "./Last Played Item Components/LastPlayedItemIndex";
import LastPlayedItemImage from "./Last Played Item Components/LastPlayedItemImage";

const LastPlayedItem = ({ track, itemIndex }) => {
  return (
    //TODO: Divide to components to make less complex
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
