import React from "react";
import "bootstrap/dist/css/bootstrap.css";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

 
// We import all the components we need in our app
import Artist from "./components/artist";
import Edit from "./components/edit-setting";
import Follow from "./components/followed-artists";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import OrderDetail from "./components/order-detail";
import OrderHistory from "./components/order-history";
import Signup from "./components/signup";
import Signin from "./components/signin";
import ProfileCollect from "./components/profile-collects";
 
const App = () => {
 return (
   <div>
	    {/* <Homepage /> */}
   <Navbar />
     <Routes>
	     <Route exact path="/"  element={<Homepage />} /> 
       <Route path="/artist" element={<Artist />} />
       <Route path="/edit-setting" element={<Edit />} />
       <Route path="/follow" element={<Follow />} />
       <Route path="/login" element={<Signin />} />
       <Route path="/order-history" element={<OrderHistory />} />
       <Route path="/order-history-detail" element={<OrderDetail />} />
       <Route path="/home" element={<Homepage />} />
       <Route path="/register" element={<Signup />} />
       <Route path="/profile-collects" element={<ProfileCollect />} />
     </Routes>
   </div>
 );
};
 
export default App;


