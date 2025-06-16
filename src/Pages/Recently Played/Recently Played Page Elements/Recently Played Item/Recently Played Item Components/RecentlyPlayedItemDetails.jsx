import React from "react";
import styles from "./RecentlyPlayedItemComponents.module.css"
function formatPlayedAt(playedAt) {
    const date = new Date(playedAt);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const period = date.getHours() >= 12 ? "PM" : "AM";
    return `${month} ${day}, ${hours}:${minutes} ${period}`;
  }

const LastPlayedItemDetails = ({track}) => {
    const playedAt = track.played_at;
    const trackData = track.track;
  
    const formattedDate = formatPlayedAt(playedAt);
    
  return (
    <div className="flex-grow-1 d-flex flex-column">
      <span
        className={`text-white fw-bold ${styles.song_name}`}
      >
        {trackData.name}
      </span>
      <div className="d-flex gap-2">
        <span className="text-white">{trackData.album.name}</span>
        <span style={{ color: "gray" }}>{trackData.artists[0].name}</span>
      </div>
      <span style={{ color: "lightgray" }}>{formattedDate}</span>
    </div>
  );
};

export default LastPlayedItemDetails;
