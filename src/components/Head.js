import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { CacheResult } from "../utils/searchSlice";
// import { json } from "react-router-dom";
const Head = () =>{
    
    const [searchQuery, setsearchQuery] = useState("");
    // console.log(searchQuery);

    const [suggestions, setSuggestions] = useState([]);
    
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch();
    const toogleMenuHandler = ()=>{
        dispatch(toogleMenu());
    }

    const changeQuery = (e) =>{
        setsearchQuery(e.target.value);
    }
   
    const searchCache = useSelector((store)=> store.search)
   

    // Attaining DEBOUNCING----------
        // make an API call after every key press
        // but if difference between 2 API calls is <200ms
        // then Decline the API call
    useEffect(()=>{
        

        const getSearchSuggestions = async () =>{
            // console.log(searchQuery);
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await data.json();
            // console.log(json[1]);
    
            setSuggestions(json[1]);


            dispatch(CacheResult({
                [searchQuery]: json[1],
            }));
        }

        //API call after 200ms
        const timer = setTimeout(()=>{
            if(searchCache[searchQuery]){ // if this key present
                setSuggestions(searchCache[searchQuery]); // set the value of this key
            }
            else{
                getSearchSuggestions(); // can call this directly if cache feature no require
            }
        },200);

        // when componenet re-render after key press(change in searchQuery) then a new setTimeOut makes for each API call
        // we want to prevent that we want that after re-render new SetTimeOut not made.... old setTimeOut is replace or reset  
        // thus assign const timer to setTimeOut as clear in return statement
        
        // To clean up the mounting actions (Component Unmounts) we use return in UseEffect 
        // this return destroy the previous component
        return ()=>{
            clearTimeout(timer);
        }

        // When re-render done after 200ms then previous component timeOut is destroy

    },[searchQuery]) // everytime searchQuery change then API call will be made

    






    return(
        <div className="grid grid-flow-col p-3 m-2 shadow-lg">
            <div className="flex col-span-1">
                
                <img className="h-8 cursor-pointer" 
                onClick={toogleMenuHandler}  // also give like ->... ()=>toogleMenuHandler()
                src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" alt="Menu"/>
                
                <a href="/">
                <img className="h-7 pl-6 pt-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU" alt="logo"/>
                </a>

            </div>


            <div className="col-span-10 pl-96">
                
                <div>
                <input className="px-5 border-2 rounded-l-full border-slate-400 w-1/2 p-1" placeholder="Search"
                type="text" value={searchQuery} onChange={changeQuery} 
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}/>
                
                <button className="border-2 rounded-r-full border-slate-500 p-1 w-12 bg-slate-200">
                    🔍
                </button>
                </div>

                {showSuggestions && (<div className="fixed bg-white py-2 px-2 w-[25rem] shadow-lg rounded-lg border border-gray-100">
                    <ul>
                        {suggestions.map((s) => (
                        <li key={s} className="py-1 px-3 hover:bg-gray-100"> {s} </li>))}
                    
                    </ul>
                </div>)
                }
            </div>

            <div className="col-span-1">
                <img className="h-8"
                src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user"/>

            </div>

 

        </div>
    )
}



export default Head;