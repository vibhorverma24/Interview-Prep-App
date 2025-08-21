import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({setCurrentPage}) => {
    const [profilePic,setProfilePic] = useState(null);
    const [fullName,setfullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const [error,setError] = useState(null);

    const navigate = useNavigate()
    const handleSignUp = async(e)=>{
        e.preventDefault();
    }
    // Handle SignUp Form Submit
    return(
        <div>SignUp</div>
    );
    return(
        <div className="">
            <h3 className="Create an Account">
                <p className="">
                    Join us today by entering your details below.
                </p>
                <form onSubmit={handleSignUp}>
                    <div className="">
                        <Input
                          value={fullName}
                          onChange={({target})=>setfullName(target.value)}
                          label="Full Name"
                          placeholder="John"
                          type="text"
                        />
                        <Input
                          value={email}
                          onChange={({target})=>setEmail(target.value)}
                          label="Email Address"
                          placeholder="John@example.com"
                          type="text"
                        />
                        <Input
                          value={password}
                          onChange={({target})=>setPassword(target.value)}
                          label="Password"
                          placeholder="Min 8 Characters"
                          type="password"
                        />
                    </div>
                    {error && <p className="">{error}</p>}
                    <button type="submit" className="">
                        SIGN UP
                    </button>
                    <p className="">
                        
                    </p>
                </form>
            </h3>
        </div>
    )
}

export default SignUp