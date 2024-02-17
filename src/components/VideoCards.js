import React from 'react'

const VideoCards = ({info}) => {   // destructuring the props.info
    // console.log(info);

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    return (
    <div className='p-2 m-2 w-80 shadow-lg h-80'>
        <img 
        className='rounded-lg'
        alt='thumbnails' src={thumbnails.medium.url}></img>

        <ul>
            <li className='font-bold py-2'>{title.length<50?title: title.substr(0,90)+"..." }</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount/10000} views</li>
        </ul>
    </div>
  )
}

export default VideoCards;