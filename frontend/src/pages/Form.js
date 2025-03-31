import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "../style.css";
function Form() {
  const [formData, setFormData] = useState({
    regNo: "",
    name: "",
    block: "",
    roomNo: "",
    workType: "electrical",
    category: "requisition",
    comments: "",
    proof: null,
  });
  const[selectedFile,setselectedFile]=useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({...formData,proof:e.target.files[0]});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    for(const key in formData){
      formDataToSend.append(key,formData[key]);
    }
    console.log("FormData being sent:", Object.fromEntries(formDataToSend.entries()));
    try {
        const response = await fetch("http://localhost:5000/submit-request", {
            method: "POST",
            body: formDataToSend
        });

        const data = await response.json();
        if (response.ok) {
            alert("✅ Form submitted successfully!");
            console.log("Uploaded Proof Path:", data.proof);
        } else {
            alert("❌ Error submitting form");
        }
    } catch (error) {
        console.error("❌ Failed to submit form:", error);
    }
    setFormData({ regNo: "", name: "", block: "", roomNo: "", workType: "electrical", category: "requisition", comments: "" ,proof:null});
};

  
  return (
    <>
    <nav className="navbar">
    <div className="logo-space"><img src="/logo1.png" alt="Care Point Logo" className="logo" width={150} height={100}/></div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/form">Student Form</a>
          <a href="/reports">Reports</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    <div>
      <h2>Student Maintenance Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="regNo" value={formData.regNo} placeholder="Registration Number" onChange={handleChange} required />
        <input name="name" value={formData.name} placeholder="Name" onChange={handleChange} required />
        <input name="block" value={formData.block} placeholder="Block" onChange={handleChange} required />
        <input name="roomNo" value={formData.roomNo} placeholder="Room Number" onChange={handleChange} required />
        
        <select name="workType" value={formData.workType} onChange={handleChange}>
          {["electrical", "plumbing", "cleaning", "internet", "laundry", "other"].map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <select name="category" value={formData.category} onChange={handleChange}>
          {["suggestions", "improvements", "feedbacks", "requisition"].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <textarea name="comments" value={formData.comments} placeholder="Comments" onChange={handleChange}></textarea>
        <input name ="proof" type="file" onChange={handleFileChange} />
        
        <button type="submit">Submit</button>
      </form>
    </div>
    <footer className="footer">
        &copy; 2025 Care Point™ | All Rights Reserved | Contact: support@carepoint.com
      </footer>
    </>
  );
}


export default Form;
