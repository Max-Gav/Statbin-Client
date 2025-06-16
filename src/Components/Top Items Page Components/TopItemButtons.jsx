import React from "react";
import ItemPreviewButton from "../Item Buttons Components/ItemPreviewButton";
import ItemSpotifyButton from "../Item Buttons Components/ItemSpotifyButton";
import ItemProfileButton from "../Item Buttons Components/ItemStatbinPageButton";

const TopItemButtons = ({ preview_url, item_spotify_url }) => {

  return (
    <div className="d-flex row align-items-center text-center justify-content-center gap-xl-1 gap-5">
      <ItemProfileButton />
      <ItemPreviewButton preview_url={preview_url} />
      <ItemSpotifyButton spotify_url={item_spotify_url} />
    </div>
  );
};

export default TopItemButtons;
