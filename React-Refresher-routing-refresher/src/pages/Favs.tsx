import { useContext } from "react";
import MeetUpList from "../components/meetups/MeetupList";
import FavContext from "../store/fav-context";

const FavsPage: React.FC = () => {
  const favsCtx = useContext(FavContext);

  let content;
  if (favsCtx.totalFavorites === 0) {
    content = (
      <p>
        No Favs Added. Note that we have not added cookies or session to store
        the "added favs data"
      </p>
    );
  } else {
    content = <MeetUpList meetups={favsCtx.favorites} />;
  }

  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  );
};

export default FavsPage;
