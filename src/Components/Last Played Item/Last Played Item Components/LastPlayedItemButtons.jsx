import React from "react";
import LastPlayedItemSpotifyButton from "./Last Played Item Buttons Components/LastPlayedItemSpotifyButton";
import LastPlayedItemPreviewButton from "./Last Played Item Buttons Components/LastPlayedItemPreviewButton";

const LastPlayedItemButtons = ({ trackData }) => {

  return (
    <div className="d-flex gap-3 text-center">
      <LastPlayedItemPreviewButton preview_url={trackData.preview_url}/>
      <LastPlayedItemSpotifyButton
        spotify_url={trackData.external_urls.spotify}
      />
    </div>
  );
};

export default LastPlayedItemButtons;
