import React from "react";
import {Link} from "react-router-dom";
import Wishlist from "./Wishlist";

const  Navbar = () => {
    return ( 
        <nav className="navbar">
            
            <Link to="/">Home</Link>
            

           
            <Link to="/w">WishList</Link>
            </nav>
            
     );
}
export default Navbar;