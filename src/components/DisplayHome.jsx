import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto ">
          {albumsData.map((i, ind) => (
            <AlbumItem
              key={ind}
              name={i.name}
              image={i.image}
              desc={i.desc}
              id={i.id}
            />
          ))}
        </div>
      </div>

      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto ">
          {songsData.map((song, ind) => (
            <SongItem
              key={ind}
              name={song.name}
              desc={song.desc}
              id={song.id}
              image={song.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
