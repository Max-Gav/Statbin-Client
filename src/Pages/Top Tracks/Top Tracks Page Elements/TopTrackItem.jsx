import React from "react";
import { Card } from "react-bootstrap";
import styles from "./TopTrackItem.module.css";
import TopItemButtons from "../../../Components/Top Items Page Components/TopItemButtons";

const TopTrackItem = ({ item:track, itemIndex }) => {

  return (
    <div className="col-xl-2 col-lg-4 col-md-6 my-2">
      <Card
        className="text-white p-0 text-center"
        style={{ position: "relative", border: "none"  }}
        bg="transparent"
      >
        <div className={styles.track_image_container}>
          <TopItemButtons
            preview_url={track.preview_url}
            item_spotify_url={track.external_urls.spotify}
          />
          <Card.Img
            src={track.album.images[0].url}
          />
          <Card.Img
            src={track.album.images[0].url}
            className={styles.image_shadow}

          />
        </div>
        <Card.Body>
          <Card.Title
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontSize: "16px",
            }}
          >
            {itemIndex}. {track.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TopTrackItem;
