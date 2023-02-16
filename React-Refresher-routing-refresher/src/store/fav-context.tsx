import { createContext, useState } from "react";
import { Meetup } from "../meetup.modal";

interface FavContextProps {
  favorites: Meetup[];
  totalFavorites: number;
  addFav: (meetupData: Meetup) => void;
  removeFav: (meetupId: string) => void;
  itemIsFav: (meetupId: string) => boolean;
}

interface ContextChildren {
  children: React.ReactNode;
}

const FavContext = createContext<FavContextProps>({
  favorites: [],
  totalFavorites: 0,
  addFav: (meetupData: Meetup) => {},
  removeFav: (meetupId: string) => {},
  itemIsFav: (meetupId: string) => false,
});

export const FavContextProvider: React.FC<ContextChildren> = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);

  const addFavHandler = (favMeetup: Meetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favMeetup);
    });
  };

  const removeFavHandler = (meetupId: string) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavHandler = (meetupId: string) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context: FavContextProps = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    itemIsFav: itemIsFavHandler,
  };
  return <FavContext.Provider value={context}>{children}</FavContext.Provider>;
};

//value will pass the latest snapshot of the components and
//will re-render the components that are using the context

export default FavContext;
