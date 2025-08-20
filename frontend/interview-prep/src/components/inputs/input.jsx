import React, { useState } from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6"

const Input = ({value,onChange,label,placeholder,type}) => {
    const{showPassword,setShowPassword} = useState(false);
    const toggleShowpassword = () => {
        setShowPassword(!showPassword);
    }
    return <div>
        <label className="">{label}</label>
        <div className="">
            <input type={
                type=="password" ? (showPassword ? "text" : "password"): type
                }
                placeholder={placeholder}
                className=""
                value={value}
                onChange={(e)=>onChange(e)}
                />
                
        </div>
    </div>
}