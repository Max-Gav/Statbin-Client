import React from "react";
import ItemPreviewButton from "../../../../../Components/Item Buttons Components/ItemPreviewButton";
import ItemProfileButton from "../../../../../Components/Item Buttons Components/ItemStatbinPageButton";
import ItemSpotifyButton from "../../../../../Components/Item Buttons Components/ItemSpotifyButton";
const LastPlayedItemButtons = ({ trackData }) => {
  return (
    <div className="d-flex gap-3 text-center">
      <ItemPreviewButton preview_url={trackData.preview_url} />
      <ItemProfileButton />
      <ItemSpotifyButton spotify_url={trackData.external_urls.spotify} />
    </div>
  );
};

export default LastPlayedItemButtons;
