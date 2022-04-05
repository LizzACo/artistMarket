// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
//import signup from "./components/signup"
import Signup from "./components/signup";
import Signin from "./components/signin";
import Homepage from "./components/homepage";
 
const App = () => {
 return (
   <div>
	    {/* <Homepage /> */}
   <Navbar />
     <Routes>
	 <Route path="*"  element={<Homepage />} /> 
       <Route exact path="/signup" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/register" element={<Signup />} />
       <Route path="login" element={<Signin />} />
       <Route path="/home" element={<Homepage />} />
     </Routes>
   </div>
 );
};
 
export default App;


