import React, { useContext } from 'react'
import { PlayerContext } from './PlayerContext'

function SongItem(props) {
  const {playWithId} = useContext(PlayerContext)
  console.log(playWithId)
  return (
    <div onClick={() => playWithId(props.id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={props.image} className='rounded' alt="" />
        <p className='font-bold mt-2 mb-1'>{props.name}</p>
        <p className="text-slate-200 text-sm">{props.desc}</p>
    </div>
  )
}

export default SongItem