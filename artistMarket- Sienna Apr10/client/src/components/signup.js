import React, {  useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import '../css/signup.css';
export default function Signup() {

const [form, setForm] = useState({
        name: "",
        email: "",
        password:""
      });
const navigate = useNavigate();

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
    const registerUser = { ...form };

    console.log(registerUser);
  
    await fetch("http://localhost:5001/auth/signUp", {
      method: "POST",
      body: JSON.stringify(registerUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((response) => {

        // console.log("",response.data.token);

    })
    .catch(error => {
      window.alert(error);
      return;
    });
 
    setForm({ name: "", email: "",password:"" });
    navigate("/login");
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
    <p>Sign up for the best art works in APPNAME...</p>

    <form onSubmit={onSubmit}>

    <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
    </div>

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

    <div className="form-group">
         <input
           type="checkbox"
           id="agreeTerms"
           value={form.agreeTerms}
           onChange={(e) => updateForm({ agreeTerms: e.target.value })}
         />
         Agree to the Term of Use, Privacy Policy, and Conditions of Sale and to receiving emails from Venusty
    </div>
    <div className="">
         <input
           type="submit"
           value="SIGN UP"
           className="btn_signup"
         />
       </div>
    </form>

    <div className="flex-container">
        <div></div>
        {/* <div style="background-color: #fff;">or</div> */}
        <div></div>  
    </div>

    <div>
      {/* <button type="submit" className="btn_signup">SIGN UP</button> */}

      <button type="submit" className="btn_continue"><i className="bi bi-apple"></i> Continue with Apple</button>
      <button type="submit" className="btn_continue"><i className="bi bi-google"></i> Continue with Google</button>
      <button type="submit" className="btn_continue"><i className="bi bi-facebook"></i> Continue with Facebook</button>
    </div>
    </div>
    </>

    );
}