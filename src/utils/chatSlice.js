import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";


// this slice is for live chat application feature

const chatSlice = createSlice({
    name : "chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage: (state,action) =>{
            state.messages.push(action.payload);
            // this will remove the 1 top most message when size is become 20 in chat box... it restrict length to be 20
            // by this the message length 20 always... so prev data remove after size become more 20
            // this prevent the page to have lots of data.... thus prevent lagging of web page and improve performance 
            // state.messages.splice(20,1);
            
            // we pass 20 as constant as we can change this value as per the device version, OS or device type etc. 
            state.messages.splice(LIVE_CHAT_COUNT,1);
        }
    }
})


export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;