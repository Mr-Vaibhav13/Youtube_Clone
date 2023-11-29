import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  

  if(!isMenuOpen) return null; // if it is false then below lines no execute.. this called early return
  
  
  return (
    <div className='p-5 shadow-lg w-48'>

        <ul>
          <li> <Link to={"/"}>Home</Link></li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>


        <h1 className='font-bold pt-5'>You </h1>
        <ul>
          <li>Your channel</li>
          <li>History</li>
          <li>Your videos</li>
          <li>Your Courses</li>
          <li>watch Later</li>
        </ul>

         
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
          <li>2CELLOS</li>
          <li>CodeWithHarry</li>
          <li>Dermot Kennedy</li>
          <li>Gate Smashers</li>
        </ul>

        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Learning</li>
        </ul>

    </div>
  )
}

export default Sidebar