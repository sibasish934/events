import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavsPage from "./pages/Favs";
import Layout from "./components/layout/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-event" element={<NewMeetupsPage />} />
        <Route path="/favs" element={<FavsPage />} />
      </Routes>
    </Layout>
  );
};
export default App;
