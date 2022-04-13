// import React, { useState} from "react";
import  {useStateIfMounted} from "use-state-if-mounted"; 
import { useNavigate } from "react-router";


import '../css/signin.css';
export default function Signin() {

const [form, setForm] = useStateIfMounted({
        email: "",
        password:""
      });
const navigate = useNavigate();

async function signupPage(e) {
        e.preventDefault();
        navigate("/register");
      }

// These methods will update the state properties.
 function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

 // This function will handle the submission.
 async function onSubmit(e) {
    e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
    const loginUser = { ...form };

    // console.log(loginUser);
  
    await fetch("http://localhost:5001/auth/signIn", {
      method: "POST",
      withCredentials: true,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
      },
      body: JSON.stringify(loginUser)
    })
    .then((response) => response.json())
    .then((response) => {

      if (response.status === 401) {
        // do what you need to do here
        window.alert("invalid credential")
      }
        else{
          navigate("/")
        }

    })
    .catch(error => {
      window.alert("invalid credentials")
      return;
    });
    
    setForm({email: "",password:"" });
  }

    return (
        <>
    
    <div className="float_right">
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
      </svg> */}
    </div>

  <div className="container">
    <div className="logo">VENUSTY</div>
    <p>Sign In for the best art works in APPNAME...</p>

    <form onSubmit={onSubmit}>

    <div className="form-group">
         <label htmlFor="email">email</label>
         <input
           type="text"
           id="email"
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
    </div>

    <div className="form-group">
         <label htmlFor="password">password</label>
         <input
           type="password"
           id="password"
           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
    </div>
    <div>
        <div className="">
            <input
            type="submit"
            value="SIGN IN"
            className="btn_signup"
            />
        </div>
        <button onClick={signupPage}  className="btn_signup">
           SIGN UP
        </button>
    </div>
    
    </form>


    <div>

      <button type="submit" className="btn_continue"><i className="bi bi-apple"></i> Continue with Apple</button>
      <button type="submit" className="btn_continue"><i className="bi bi-google"></i> Continue with Google</button>
      <button type="submit" className="btn_continue"><i className="bi bi-facebook"></i> Continue with Facebook</button>
    </div>
    </div>
    </>

    );
}