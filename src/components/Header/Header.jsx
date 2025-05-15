import "./Header.css";
import logo from "../../assets/logo.png";
import notification from "../../assets/notification.svg";
import user from "../../assets/user.svg";
import arrow from "../../assets/arrow.svg";
import search from "../../assets/search.svg";

function Header() {
  return (
    <>
      <header>
        <div className="left">
          <img src={logo} alt="" />
          <ul>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Favorites</li>
            <li>Browse by language</li>
          </ul>
        </div>
        <div className="right">
          <img src={search} alt="" />
          <img src={notification} alt="" />
          <div className="profile">
            <img src={user} alt="" />
            <img src={arrow} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
