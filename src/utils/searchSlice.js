import { createSlice } from "@reduxjs/toolkit";


// here store the cache of search keys in search bar of our Youtube
const searchSlice = createSlice({
    name:'search',
    initialState : {
        
    },
    reducers: {
        CacheResult:(state, action)=>{
            // state = {...action.payload, ...state} // Gives Error.. this logic same as below but not working here... do not know why 
            
            // Merge obects using Object.assign methods (google for reference)
            state = Object.assign(state, action.payload);
        }
    }
})


// Search in array :- O(n)
// Search in dictionary/map/object :- O(1)

// thus for cache store we use map in redux

// by this if we write india and then clear it by backspace
// then application nit made api call for indi or ind as 
// initially when write india in blank search we made API call for those and that store in here cache 
// and we access them when backspacing or re-write again the word

export const {CacheResult} = searchSlice.actions;

export default searchSlice.reducer;

