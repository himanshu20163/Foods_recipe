import React from 'react'
import './Search.css'

export const Search = ({searchvalue,setSearchvalue}) => {
    console.log(searchvalue)
  return (
    <div className='search'>
        <input type="text" placeholder='Search Your  Favourite foods' onChange={(e)=>{
            setSearchvalue(e.currentTarget.value)
        }} />
        <button onClick={(e)=>{
            console.log("clicked",searchvalue)
         setSearchvalue(searchvalue)
        }}> Search</button>
    </div>
  )
}
