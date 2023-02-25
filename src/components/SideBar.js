import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Short</li>
        <li>Live</li>
        <li>Videos</li>
      </ul>
      <h1 className="font-bold pt-4">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Songs</li>
      </ul>
      <h1 className="font-bold pt-4">Watch later</h1>
      <ul>
        <li>Trending</li>
        <li>News</li>
        <li>Learning</li>
        <li>Fashion</li>
        <li>Beauty</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  );
};

export default SideBar;
