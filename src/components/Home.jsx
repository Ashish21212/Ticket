import React, { useState } from 'react'
import Photo from './Photolist'

const Home = () => {
    const[item, setItem]=useState(Photo);
  return (
    <>
    <div className="twice">
    <h1>Top Destination</h1>
    <p>Enjoy this place</p>
    </div>
    <div className="main_container">
    
      <div className="destination">
   
        {
            item.map((matter)=>{
                const {img,name}=matter;
                return(
                    <div className="row1">
                   
                  <img src={img} alt="" />
                  <h3>{name}</h3>
                </div>
                )
            })
        }
       
      </div>
      </div>
      
    </>
  )
}

export default Home
