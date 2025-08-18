import React, { useState } from "react";
import HERO_IMG from "../assets/hero-img.png";
import {APP_FEATURES} from "../utils/data";
import {useNavigate} from "react-router-dom"

const LandingPage = () => {
    const navigate = useNavigate();

    const [openAuthModel, setOpenAuthModel] = useState(false);
    const [currentPage, setCurrentPage] = useState("Login");

    const handleCTA = () => {};

    return(
        <div className="w-full min-h-screen bg-[#FFFCEF] relative">
  {/* Blurred background box */}
  <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0 z-0"></div>

  {/* Actual content */}
  <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10 text-black">
    <header className="flex justify-between items-center mb-16">
      <div className="text-xl font-bold">Interview Prep AI</div>
      <button className="bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer">
        Login / Sign Up
      </button>
    </header>

    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-8">
        <div className="text-lg font-semibold">AI Powered</div>
        <h1 className="text-4xl font-bold mt-4 text-black">
          Ace Interviews with <br />
          <span className="text-orange-600">AI-Powered</span> Learning
        </h1>
      </div>
      <div className="md:w-1/2">
        <p className="text-md text-gray-700 mb-6">
          Get role-specific questions, expand answers when you need them,
          dive deeper into concepts, and organise everything your way.
          From preparation to mastery - your ultimate interview toolkit is here.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>

    )
}

export default LandingPage