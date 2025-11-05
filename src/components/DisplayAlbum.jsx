import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets";
import { PlayerContext } from "./PlayerContext";

function DisplayAlbum() {
  const { id } = useParams();
  const albumsDatas = albumsData[id];
  const {playWithId} = useContext(PlayerContext)
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end ">
        <img src={albumsDatas.image} alt="" className="w-48 rounded" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumsDatas.name}
          </h2>
          <h4 className="">{albumsDatas.desc}</h4>
          <p className="mt-1">
            <img
              src={assets.spotify_logo}
              className="inline-block w-5"
              alt=""
            />
            <b>Spotify</b>. 1,323,154 likes . <b>50 songs,</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        {" "}
        <p>
          <b className="mr-4 ">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block ">Date Added</p>
        <img src={assets.clock_icon} alt="" className="m-auto w-4" />
      </div>
      <hr className="text-[#a7a7a7]" />
      {songsData.map((song, ind) => (
        <div onClick={() => playWithId(song.id)}
          className=" grid grid-cols-3  sm:grid-cols-4 gp-2 p-2 items-center
             text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          key={ind}
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{ind + 1}</b>
            <img src={song.image} alt="" className="inline w-10 mr-5 " />
            {song.name}
          </p>
          <p className="text-[15px]">{albumsDatas.name}</p>
          <p className="text-[15px] ml-3 hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center ml-3 ">{song.duration}</p>
        </div>
      ))}
    </>
  );
}

export default DisplayAlbum;
