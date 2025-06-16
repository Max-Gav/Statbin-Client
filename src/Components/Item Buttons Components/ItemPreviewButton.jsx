import React, { useContext, useRef, useState } from "react";
import styles from "./ItemButtons.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MusicPreviewControlContext } from "../../AppContext.jsx";

const btnSize = "50px";

const ItemPreviewButton = ({ preview_url }) => {
  const audioRef = useRef(null);
  const {
    isPlayingAnyPreview,
    setIsPlayingAnyPreview,
    currentPlayer,
    setCurrentPlayer,
  } = useContext(MusicPreviewControlContext);

  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  //Handle Preview Play/Pause Globally and Locally
  const handleToggle = () => {
    if (isPlayingPreview) {
      audioRef.current.pause();
      setIsPlayingAnyPreview(false);
      setIsPlayingPreview(false);
    } else {
      setIsPlayingAnyPreview(true);
      setIsPlayingPreview(true)
      if (isPlayingAnyPreview) {
        currentPlayer.current.pause();
      }
      setCurrentPlayer(audioRef);
      audioRef.current.play();
    }
  };

  const handleEnded = () => {
    setIsPlayingPreview(false);
    setIsPlayingAnyPreview(false);
  };

  const handlePaused = () =>{
    setIsPlayingPreview(false);
  }

  

  //Button Tooltip
  const tooltip = (
    <Tooltip>
      <strong>{preview_url ? "Spotify" : "No"} Preview</strong>
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="bottom" overlay={tooltip}>
      {preview_url ? (
        //Preview Available
        <button
          className={`rounded-circle fs-4 ${
            isPlayingPreview ? styles.pause_button : styles.play_button
          }`}
          style={{ width: btnSize, height: btnSize, position: "relative" }}
          onClick={handleToggle}
        >
          {isPlayingPreview ? (
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
          <audio src={preview_url} ref={audioRef} onEnded={handleEnded} onPause={handlePaused}></audio>
        </button>
      ) :<></>
        //No Preview
        // <button
        //   className={"rounded-circle fs-4 " + styles.no_preview_button}
        //   style={{ width: btnSize, height: btnSize }}
        // >
        //   <i className="fa-solid fa-x"></i>
        // </button>
      }
    </OverlayTrigger>
  );
};

export default ItemPreviewButton;
