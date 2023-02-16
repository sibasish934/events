import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
const NewMeetupsPage: React.FC = () => {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData: {}) => {
    fetch("https://events-e7c53-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/"); // navigate back to home page
    });
  };

  return (
    <section>
      <h1>Add New Event</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupsPage;
