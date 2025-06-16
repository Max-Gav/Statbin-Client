import React, { useContext } from "react";
import { IsLoggedInContext } from "../../AppContext";
import ConnectButton from "../../Components/General Page Components/Connect Button/ConnectButton";
import TopItemsPageLoadMoreButton from "../../Components/Top Items Page Components/TopItemsPageLoadMoreButton";
import PageTitle from "../../Components/General Page Components/PageTitle";
import TopItemsPageTimeFilterButtons from "../../Components/Top Items Page Components/TopItemsPageTimeFilterButtons";
import PageItemsLoader from "../../Components/General Page Components/PageItemsLoader";
import TopArtistItem from "./Top Artists Page Elements/TopArtistItem";
import useTopItems from "../../hooks/useTopItems";

const TopArtists = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext);
  const {items, page, setPage, timeRange, setTimeRange} = useTopItems("artists");

  return (
    <div className="container d-flex flex-column gap-3 my-3 text-white">
      <PageTitle title={"Top Artists"} />
      {isLoggedIn ? (
        <>
          <TopItemsPageTimeFilterButtons
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            setPage={setPage}
          />
          <div className="row">
            <PageItemsLoader
              items={items}
              itemComponent={TopArtistItem}
            />
          </div>
          <TopItemsPageLoadMoreButton page={page} setPage={setPage} />
        </>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
};

export default TopArtists;
