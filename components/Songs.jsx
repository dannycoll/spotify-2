import { playlistState } from "../atoms/playlistAtom";
import { useRecoilValue } from "recoil";
import Song from "./Song";

const Songs = () => {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className="text-white px-8 flex flex-col space-y-1 pb-28">
      {playlist?.tracks.items.map((x, i) => (
        <Song key={x.track.id} track={x} order={i} />
      ))}
    </div>
  );
};

export default Songs;
