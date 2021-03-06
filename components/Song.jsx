import useSpotify from "../hooks/useSpotify";
import { millisToMinsAndSecs } from "../lib/time";

const Song = ({ order, track }) => {
  const spotfiyApi = useSpotify();
  return (
    <div className="grid grid-cols-2 text-neutral-500 py-3 px-4 hover:bg-neutral-900 rounded-lg">
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          src={track.track.album.images[0].url}
          alt=""
          className="h-10 w-10"
        />
        <div>
          <p className="w-36 lg:w-80 text-white truncate">{track.track.name}</p>
          <p className="w-40">{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden w-60 lg:w-80 truncate md:inline">
          {track.track.album.name}
        </p>
        <p>{millisToMinsAndSecs(track.track.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
