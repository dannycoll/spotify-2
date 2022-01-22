import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  HeartIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";

const Sidebar = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items as any);
        setPlaylistId(data.body.items[0].id);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div className="text-gray-500 p-5 text-xs lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide hidden md:inline-flex">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <LogoutIcon className="h-5 w-5" />
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        {playlists.map((x: any) => (
          <p
            className="cursor-pointer hover:text-white"
            key={x.id}
            onClick={() => setPlaylistId(x.id)}
          >
            {x.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
