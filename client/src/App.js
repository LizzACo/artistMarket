import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Home from "./components/home";
import Artists from "./components/artist";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/signup" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route exact path="/home" element={<Home />} />
       <Route path="/artist" element={<Artists />} />
     </Routes>
   </div>
 );
};
 
export default App;

