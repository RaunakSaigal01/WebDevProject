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
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  
    // Clear the form after submission
    setFormData({
      regNo: "",
      name: "",
      block: "",
      roomNo: "",
      workType: "electrical",
      category: "requisition",
      comments: "",
      file: null,
    });
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
        <input type="file" accept=".pdf,.doc,.jpg" onChange={handleFileChange} />
        
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
