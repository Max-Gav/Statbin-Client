import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "./ItemButtons.module.css"

const btnSize = "50px";

const ItemProfileButton = () => {
  //Button Tooltip
  const tooltip = (
    <Tooltip>
      <strong>Statbin Page</strong>
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <button
        className={"rounded-circle fs-4 " + styles.statbin_button }
        style={{ width: btnSize, height: btnSize }}
      >
        <i className="fa-solid fa-user"></i>
      </button>
    </OverlayTrigger>
  );
};

export default ItemProfileButton;
