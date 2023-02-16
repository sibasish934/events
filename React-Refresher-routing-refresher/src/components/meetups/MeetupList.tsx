import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItems";
import { Meetup } from "../../meetup.modal";

interface MeetupListProps {
  meetups: Meetup[];
}

console.log("hi");
const MeetUpList: React.FC<MeetupListProps> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetUpList;
