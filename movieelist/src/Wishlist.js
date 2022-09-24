

import React from "react";

import Navbar from "./Navbar";


const Wishlist =({favs,setfavs}) => {
  
  return( 
    favs.map((item)=>
        
    <div className="ui middle aligned divided list">
    <div className="item">
      <div className="right floated content">
        <div className="ui button" >
          Added
        </div>
        
      </div>
      <div className="content" style={{textAlign:"center;"}}>🎞️{item.title}</div>
      
    </div>
  </div>
 
  )
  )
}
export default Wishlist;
