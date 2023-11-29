import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img className='h-8 rounded-2xl' 
        alt='chatImg' src='https://yt4.ggpht.com/ytc/APkrFKYurV3wR3ZobT9cXONXWr6nr67lMvAibEL-pg=s32-c-k-c0x00ffffff-no-rj'/>
        <span className='px-2 font-bold'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;