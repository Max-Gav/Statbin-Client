import React from "react";
import TopArtistItemPreviewButton from "./Top Artist Item Button Components/TopArtistItemPreviewButton";
import TopArtistItemSpotifyButton from "./Top Artist Item Button Components/TopArtistItemSpotifyButton";
import TopArtistItemProfileButton from "./Top Artist Item Button Components/TopArtistItemProfileButton";

const TopArtistItemButtons = ({ trackData, artistUrl }) => {
  return (
    <div className="d-flex row align-items-center text-center justify-content-center gap-xl-1 gap-5">
      <TopArtistItemPreviewButton preview_url={trackData.preview_url} />
      <TopArtistItemProfileButton />
      <TopArtistItemSpotifyButton spotify_url={artistUrl} />
    </div>
  );
};

export default TopArtistItemButtons;
