import React, { useRef, useState } from "react";
import styles from "./LastPlayedItemButtons.module.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const LastPlayedItemPreviewButton = ({ preview_url }) => {
  const btnSize = "50px";
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  //Handle Preview Play/Pause
  const handleToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };
  

  //Button Tooltip
  const tooltip = (
    <Tooltip>
      <strong>{preview_url ? "Song":"No"} Preview</strong>
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="bottom" overlay={tooltip}> 

      {preview_url ? (
        //Preview Available
        <button
          className={`rounded-circle fs-4 ${
            isPlaying ? styles.pause_button : styles.play_button
          }`}
          style={{ width: btnSize, height:btnSize, position: "relative" }}
          onClick={handleToggle}
        >
          {isPlaying ? (
            
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
          <audio
            src={preview_url}
            ref={audioRef}
            onEnded={handleEnded}
          ></audio>
        </button>
      ) : (
        //No Preview
        <button
          className={"rounded-circle fs-4 " + styles.no_preview_button}
          style={{ width: btnSize, height: btnSize }}
        >
          <i className="fa-solid fa-x"></i>
        </button>
      )}
      </OverlayTrigger>

  );
};

export default LastPlayedItemPreviewButton;
