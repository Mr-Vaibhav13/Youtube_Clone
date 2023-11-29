import React from 'react'
import Button from './Button'



const ButtonList = () => {
  return (
    <div className='flex'>
    <Button name="All"/>
    <Button name="Vlogs"/>
    <Button name="Cricket"/>
    <Button name="Gaming"/>
    <Button name="Computer"/>
    <Button name="Funny"/>
    <Button name="Songs"/>
    </div>
  )
}

export default ButtonList