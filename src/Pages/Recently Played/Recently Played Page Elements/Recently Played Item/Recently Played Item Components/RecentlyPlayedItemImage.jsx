import React from 'react'

const LastPlayedItemImage = ({trackData}) => {
    const imgSize = "70px";

  return (
    <img
    style={{ width: imgSize, height: imgSize }}
    src={trackData.album.images[0].url}
    alt={trackData.name}
  />
  )
}

export default LastPlayedItemImage