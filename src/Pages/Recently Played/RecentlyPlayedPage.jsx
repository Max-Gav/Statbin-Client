import React, { useContext } from "react";
import { IsLoggedInContext } from "../../AppContext";
import ConnectButton from "../../Components/General Page Components/Connect Button/ConnectButton";
import PageTitle from "../../Components/General Page Components/PageTitle";
import PageItemsLoader from "../../Components/General Page Components/PageItemsLoader";
import RecentlyPlayedItem from "./Recently Played Page Elements/Recently Played Item/RecentlyPlayedItem"
import useRecentlyPlayed from "../../hooks/useRecentlyPlayedItems";

const RecentlyPlayedPage = () => {
  const {items} = useRecentlyPlayed();
  const { isLoggedIn } = useContext(IsLoggedInContext);


  return (
    <div className="container d-flex flex-column gap-3 my-3">
      <PageTitle title={"Recently Played"} />
      {isLoggedIn ? (
        <PageItemsLoader items={items} itemComponent={RecentlyPlayedItem}/>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
};

export default RecentlyPlayedPage;
