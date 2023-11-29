import React from 'react'

const VideoCards = ({info}) => {   // destructuring the props.info
    // console.log(info);

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    return (
    <div className='p-2 m-2 w-80 shadow-lg'>
        <img 
        className='rounded-lg'
        alt='thumbnails' src={thumbnails.medium.url}></img>

        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCards;