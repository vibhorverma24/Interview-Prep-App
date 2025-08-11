import React, { useState } from "react";
import HERO_IMG from "../assets/hero-img.png";
import {APP_FEATURES} from "../utils/data";

const LandingPage = () => {
    const navigate = useNavigate();

    const [openAuthModel, setOpenAuthModel] = useState(false);
    const [currentPage, setCurrentPage] = useState("Login");

    const handleCTA = () => {};

    return(
        <div className="">
            <div className="">

                <div className="">
                    {/* Header */}
                    <header className="">
                        <div className="">
                            Interview Prep AI
                        </div>
                        <button className="" onClick={()=>setOpenAuthModel(true)}>
                            Login / Sign Up
                        </button>
                    </header>

                    {/* Hero Content */}
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="">
                                    AI Powered
                                </div>
                            </div>
                            <h1 className="">
                                Ace Interviews with <br/>
                                <span className="">
                                    AI-Powered
                                </span>{" "}
                                Learning
                            </h1>
                        </div>
                        <div className="">
                            <p className="">
                                Get role-specific questions, expand answers when you need them,
                                dive deeper into concepts, and organise everything your way.
                                From preparation to mastery - your ultimate interview toolkit is here. 
                            </p>
                            <button className="" onClick={handleCTA}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage