// import React from 'react'
import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      {/* <button type="button" className="btn btn-success">Success</button> */}
    </div>
  )
}


export default App;
