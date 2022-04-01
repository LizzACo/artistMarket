import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() { 
const [form, setForm] = useState({
   username: "",
   email: "",
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
   const newUser = { ...form };
 
   await fetch("http://localhost:5001/user/add", {
     method: "POST",
     body: JSON.stringify(newUser),
     headers: {
       "Content-Type": "application/json",
     },
   })
   .catch(error => {
     window.alert(error);
     return;
   });

   setForm({ username: "", email: "" });
   navigate("/signup");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Add a New User</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="username">Username</label>
         <input
           type="text"
           className="form-control"
           id="username"
           value={form.username}
           onChange={(e) => updateForm({ username: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="email">Email</label>
         <input
           type="text"
           className="form-control"
           id="email"
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
       </div>
      
       <div className="form-group">
         <input
           type="submit"
           value="Create user"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}