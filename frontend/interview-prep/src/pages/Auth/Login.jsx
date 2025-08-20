import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (setCurrentPage) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);
    const navigate = useNavigate();

    // handle Login form Submit
    const handleLogin = async(e)=>{
        e.preventDefault();
    };
    return <div className="">
        <h3 className="">Welcome Back</h3>
        <p className="">
            Please enter your details to log in
        </p>
        <form onSubmit={handleLogin}>
            <Input
              value={email}
              onChange={({target})=>setEmail(target.value)}
              label ="Email Address"
              placeholder="john@example.com"
              type="text"
            />
            <Input
              value={password}
              onChange={({target}) => setPassword(target.value)}
              label = "Password"
              placeholder="Min 8 characters"
              type="password"
            />
        </form>
    </div>
}

export default Login