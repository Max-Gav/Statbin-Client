import React, { useContext } from "react";
import { IsLoggedInContext } from "../../AppContext";
import TopItemsPageLoadMoreButton from "../../Components/Top Items Page Components/TopItemsPageLoadMoreButton";
import PageTitle from "../../Components/General Page Components/PageTitle";
import ConnectButton from "../../Components/General Page Components/Connect Button/ConnectButton";
import TopItemsPageTimeFilterButtons from "../../Components/Top Items Page Components/TopItemsPageTimeFilterButtons";
import TopTrackItem from "./Top Tracks Page Elements/TopTrackItem";
import PageItemsLoader from "../../Components/General Page Components/PageItemsLoader";
import useTopItems from "../../hooks/useTopItems";

const TopTracks = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext);
  const {items, page, setPage, timeRange, setTimeRange} = useTopItems("tracks");

  return (
    <div className="container d-flex flex-column gap-3 my-3 text-white">
      <PageTitle title={"Top Tracks"} />
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
              itemComponent={TopTrackItem}
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

export default TopTracks;
