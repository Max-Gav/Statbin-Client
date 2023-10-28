import React from "react";
import TopArtistItem from "../../../Components/Top Artist Item/TopArtistItem";

const TopArtistsPageItemsLoader = ({artists}) => {
  return (
    <div className="row">
      {artists.map((artist, itemIndex) => {
        return <TopArtistItem artist={artist} itemIndex={itemIndex} />;
      })}
    </div>
  );
};

export default TopArtistsPageItemsLoader;
