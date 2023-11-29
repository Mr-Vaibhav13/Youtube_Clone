import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import { generateRandomName, makeRandomMessage } from '../utils/helper';



const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("")


    // API Polling-------------------------

    const dispatch = useDispatch();

    const ChatMessages = useSelector((store)=> store.chat.messages);

    useEffect(()=>{

        // every 2 sec the name and message push into the redux store
        const i = setInterval(()=>{
            // console.log("API Polling")

            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(20) 
              })

            );
        },2000);
  
        // Clear the set Interval.... garbage collection
        return () => clearInterval(i);

    },[])


  return (
    <>
    <div 
    className='w-full h-[600px] ml-2 p-2 border border-black
    bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
    
    {/* creating and test for one component, then use map*/}
    {/* <ChatMessage name="Manu Sharma" message="This is Live chat for my YOUTUBE CLONE"/> */}
    


{/* as unique id is not present thus using "uuid" for using unique key in map.. also done by index as doing previously */}  
    <div>

     {ChatMessages.map(c => <ChatMessage
     key={uuidv4()}
     name={c.name}
     message={c.message}/>)}
    </div>

    </div>

    
    <form className='w-full p-2 m-2 border border-black rounded-lg' 
    onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name: "Vaibhav",
            message: liveMessage
        }))
        setLiveMessage("");
        // console.log("Submit")
        }
        }>

        <input className='w-96 border border-grey-200 px-2' 
        type='text' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
        
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>



    </>
  )
}

export default LiveChat