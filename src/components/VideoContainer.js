import React, { useEffect, useState } from 'react';
import {YOUTUBE_VIDEO_API} from '../utils/constants';
import VideoCards from './VideoCards.js';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  
  const [videos, setVideos] = useState([]);

  const getVideos = async() =>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  }

  useEffect(()=>{
    getVideos();
  },[]);


  return (
    <div className='flex flex-wrap'>
      {videos.map(video => <Link to={"/watch?v="+video.id} key={video.id}><VideoCards info={video}/></Link>)}
    </div>
  )
}

export default VideoContainer