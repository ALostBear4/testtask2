import React, { useState, useEffect } from "react";
import axios from "axios";
import Wishlist from "./Wishlist";
import Navbar from "./Navbar";

function ClickList({favs,setfavs}) {
  const [Input, setInput] = useState(false);
  const [Output, setOutput] = useState("");
  const [List, setList] = useState([]);
  
  useEffect(() => {
    const fetchList = async () => {
      setInput(true);
      const res = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=52389392cb57776a1d7dae133ab333ea"
      );
      setList(res.data.results);
      setInput(false);
    };
    fetchList();
  }, []);

  const fetch = (item) =>{
    
    let temp =[];
    if(favs.includes(item)) 
    {
       favs.filter((c) => {
        return c !==item;
       }
       )

  }

    else {
      temp = favs;
      temp.push(item);
     
    }
  

  setfavs(temp);
  
  
};

  return (
    <div className="App">
      <div className="container-md">
        <div className="row">
          <div className="col-12">
            <div className="d-grid gap-2">
              <h2 style={{ backgroundColor: "#FFC300",textAlign:"center"}}>
                MovieList🎬🎬🎬
              </h2>
<Navbar/>
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setOutput(e.target.value)}
              />
              {Input ? (
                <h4>Loading...</h4>
              ) : (
                List.filter((value) => {
                  if (Output === "") {
                    return value;
                  } else if (
                    value.title.toLowerCase().includes(Output.toLowerCase())){
                  
                    return value;
                  }
                  
                }).map((item) => (
                  <div className="ui middle aligned divided list">
                    <div className="item">
                      <div className="right floated content">
                        <div className="ui button" onClick={()=>fetch(item)}>
                          <i className="heart icon"></i>
                          
                        </div>
                        
                      </div>
                      <div className="content">🎞️{item.title}</div>
                    </div>
                  </div>
                ))
              )
                }
               
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
                               
                }             

export default ClickList;
