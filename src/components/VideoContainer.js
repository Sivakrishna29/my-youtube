import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { YOUTUBE_API_URL } from "../utils/constants";
import VideoDetail from "./VideoDetail";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideosData();
  }, []);

  const getVideosData = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoDetail info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
