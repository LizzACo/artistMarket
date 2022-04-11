import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from 'universal-cookie';

 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

 
// We import NavLink to utilize the react router.
// import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
  const [showLogin , setLogin] = useState(true)
  const navigate = useNavigate();


    useEffect( () => {

         fetch("http://localhost:5001/checkLoginStatus", {
            method: "GET",
            withCredentials: true,
            credentials: 'include',
            headers: {
              "Content-Type": "application/json",
              'Accept': 'application/json',
            },
          })
          .then((response) => response.json())
          .then((response) => {

                    if(response.msg==="auth faileeddddd")
                    {
                        setLogin(true)
                    }
                    else{
                        setLogin(false)
                    }

                    console.log(showLogin , "showLoginnnnn")
          })
          .catch(error => {
            console.log(error)
            window.alert("invalid credentials")
            return;
          });


      });

     let logout = ()=>
      {

        fetch("http://localhost:5001/auth/signOut", {
          method: "GET",
          withCredentials: true,
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response , "response")
                  if(response)
                  {
                    let cookies = new Cookies();
                    cookies.remove('connect.sid', { path: '/' } , {domain: "localhost"});
                    navigate("login")
                  }
            })
        .catch(error => {
          console.log(error)
          return;
        });


      }

 return (
   <div>
     <header>
        <div className="logo2">VENUSTY</div>
        <div className="login-signup-button">
            <a href={window.location.origin} style={{marginRight: "1rem"}} id="signup-button">Home</a>
            {
              showLogin===true &&  <a href={window.location.origin + "/login"} id="login-button">Login</a>

            }
            {
              showLogin===true &&  <a href={window.location.origin + "/register"} id="signup-button">SignUp</a>
            }
            {
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              showLogin===false &&  <a onClick={logout} id="signup-button">Logout</a>
            }
        </div>
        </header>
   </div>
 );
}