import React from "react";
import { useState } from "react";
import ClickList from "./ClickList";
import Wishlist from "./Wishlist";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [favs, setfavs] = useState([]);

  return (
    
    <Router>
      
      <Switch>
      <Route exact path="/">
          <ClickList favs={favs} setfavs={setfavs}/>
          </Route>
      
          <Route exact path="/w">
              <Wishlist favs={favs} setfavs={setfavs}/>
              </Route>
          </Switch>
        
    </Router>
  );
}
export default App;
