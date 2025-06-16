import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/Navigation Bar/NavigationBar";
import Home from "./Pages/Home/Home";
import RecentlyPlayedPage from "./Pages/Recently Played/RecentlyPlayedPage";
import TopArtists from "./Pages/Top Artists/TopArtists";
import TopTracks from "./Pages/Top Tracks/TopTracks";


function App() {
  return (
    <>
      <Routes>
        <Route element={<NavigationBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/recently-played" element={<RecentlyPlayedPage />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-tracks" element={<TopTracks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
