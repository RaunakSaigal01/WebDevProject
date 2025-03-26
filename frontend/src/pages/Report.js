import React, { useState } from "react";
import "../style.css";
function Reports() {
  const [reportType, setReportType] = useState("");
  
  const handleDownload = (format) => {
    alert(`Downloading report in ${format} format...`);
    // Here, you can integrate backend API calls to generate and download reports
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
    <div className="container">
      <div className="container1">
        <h2>Download Maintenance Reports</h2>
        <label>Select Report Type:</label>
        <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
          <option value="">Select</option>
          <option value="student-wise">Student-wise</option>
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="work-type">Type of Work</option>
        </select>
        <div className="buttons">
          <button onClick={() => handleDownload("Excel")}>Download Excel</button>
          <button onClick={() => handleDownload("PDF")}>Download PDF</button>
        </div>
      </div>
    </div>
    <footer className="footer">
        &copy; 2025 Care Point™ | All Rights Reserved | Contact: support@carepoint.com
      </footer>
    </>
  );
}

export default Reports;
