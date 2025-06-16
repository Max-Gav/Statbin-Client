import React, { createContext, useState } from "react";
import App from "./App";
import useIsLoggedIn from "./hooks/useIsLoggedIn";

// Creating a context to indicate that the user is logged in
export const IsLoggedInContext = createContext({});

// Creating a context to indicate if any preview is playing
export const MusicPreviewControlContext = createContext({});

const AppContext = () => {
  // A state that indicates if the user is logged in
  const {isLoggedIn, setIsLoggedIn} = useIsLoggedIn();

  // Two states to manage music previewing
  const [isPlayingAnyPreview, setIsPlayingAnyPreview] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  return (
    <>
      {/* Provide a context to indicate that the user is logged in */}
      <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {/* Provide a context to indicate if any preview is playing */}
        <MusicPreviewControlContext.Provider
          value={{
            isPlayingAnyPreview,
            setIsPlayingAnyPreview,
            currentPlayer,
            setCurrentPlayer,
          }}
        >
          <App/>
        </MusicPreviewControlContext.Provider>
      </IsLoggedInContext.Provider>
    </>
  );
};

export default AppContext;
