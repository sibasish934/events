import { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import FavContext from "../../store/fav-context";
import rappel from "../../images/rappel.png";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../home/Home";

const MainHeader: React.FC = () => {
  const favCtx = useContext(FavContext);

  const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
  const { logout } = useAuth0();

  // if (isLoading) {
  //   return (<Loading />);
  // }

  return (
    <>

      <header className={classes.header}>
        <div className={classes.logo}><img src={rappel} alt="loading" /></div>
        {isAuthenticated ? (<nav>
          <ul>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? classes.active : "")}
                to="/"
                end
              >
                All Events
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? classes.active : "")}
                to="/new-event"
              >
                New Event
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? classes.active : "")}
                to="/favs"
              >
                Favorites
                <span className={classes.badge}>{favCtx.totalFavorites}</span>
              </NavLink>
            </li>
            <li>
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            </li>
          </ul>
        </nav>) : (<ul><li><button className="btn" onClick={() => loginWithRedirect()}>Log In</button></li></ul>)}
      </header>
      {/* <Home /> */}
    </>
  );
};

export default MainHeader;
