import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavContext from "../../store/fav-context";
interface MeetupItemProps {
  key?: string | number;
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
}

const MeetUpItem: React.FC<MeetupItemProps> = ({
  id,
  image,
  title,
  address,
  description,
}) => {
  const favCtx = useContext(FavContext);
  const itemIsFav = favCtx.itemIsFav(id);

  const toggleFavoriteStatusHandler = () => {
    // console.log("hi");
    //if itemIsFav is true
    if (itemIsFav) {
      favCtx.removeFav(id);
    } else {
      favCtx.addFav({
        id,
        title,
        image,
        address,
        description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFav ? "Remove From Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
