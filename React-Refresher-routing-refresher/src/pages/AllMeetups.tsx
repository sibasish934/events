import { useState, useEffect } from "react";
import MeetUpList from "../components/meetups/MeetupList";
import { Meetup } from "../meetup.modal";

const AllMeetupsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://events-e7c53-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        const meetups: Meetup[] = [];
        for (const key in data) {
          const meetup: Meetup = {
            id: key,
            ...data[key], //copying key-value pairs
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    <section>Loading...</section>;
  }

  return (
    <section>
      <h1>All Events</h1>
      <MeetUpList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
