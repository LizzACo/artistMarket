import React, {  useState } from "react";
import { useNavigate } from "react-router";
// import '../css/order.css';

export default function Order() {
const [form, setForm] = useState({
        address: "",
        city: "",
        country: "",
        funame: "",
        postal: "",
        province: "",
        phonenum: "",
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
    const newOrder = { ...form };

    console.log(newOrder);
  
    await fetch("http://localhost:5001/orders", {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .catch(error => {
      window.alert(error);
      return;
    });
 
    setForm({ address: "", city: "",country:"" ,funame:"" ,postal:"" ,province:"",phonenum:"" });
    navigate("/order-detail");
  }

    return (
        <>
    
    <div className="float_right">

    </div>

    <form onSubmit={onSubmit}>

    <div className="form-group">
         <label htmlFor="address">Address</label>
         <input
           type="text"
           id="address"
           value={form.address}
           onChange={(e) => updateForm({ address: e.target.value })}
         />
    </div>

    <div className="form-group">
         <label htmlFor="city">City</label>
         <input
           type="text"
           id="city"
           value={form.city}
           onChange={(e) => updateForm({ city: e.target.value })}
         />
    </div>

    <div className="form-group">
         <label htmlFor="country">Country</label>
         <input
           type="text"
           id="country"
           value={form.country}
           onChange={(e) => updateForm({ country: e.target.value })}
         />
    </div>

    <div className="form-group">
         <label htmlFor="funame">Full Name</label>
         <input
           type="text"
           id="funame"
           value={form.funame}
           onChange={(e) => updateForm({ funame: e.target.value })}
         />
    </div>

    <div className="form-group">
         <label htmlFor="postal">Postal Code</label>
         <input
           type="text"
           id="postal"
           value={form.postal}
           onChange={(e) => updateForm({ postal: e.target.value })}
         />
    </div>

    <div className="form-group">
         <label htmlFor="province">Province</label>
         <input
           type="text"
           id="province"
           value={form.province}
           onChange={(e) => updateForm({ province: e.target.value })}
         />
    </div>

    <div className="form-group">
         <label htmlFor="phonenum">Phone Number</label>
         <input
           type="text"
           id="phonenum"
           value={form.phonenum}
           onChange={(e) => updateForm({ phonenum: e.target.value })}
         />
    </div>

    <div className="">
         <input
           type="submit"
           value="Order"
           className="btn_order"
         />
       </div>
    </form>

    <div className="flex-container">
        <div></div>
        {/* <div style="background-color: #fff;">or</div> */}
        <div></div>  
    </div>

    </>
    );
}