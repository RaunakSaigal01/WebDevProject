import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        regNo: "",
        phone: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                navigate("/login");
            } else {
                alert("Signup Failed");
            }
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Error signing up");
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="text" name="regNo" placeholder="Registration Number" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;