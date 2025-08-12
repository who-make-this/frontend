import React from "react";
import MainPageImg from "../../assets/mainPage.svg";
import Logo from "../../component/Logo";
import Moheom from "./moheom";

export default function MainPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-[375px] h-[812px] bg-white shadow-sm relative flex items-center justify-center overflow-hidden">
                <img
                    src={MainPageImg}
                    alt="Main Page"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
                    style={{ backgroundColor: "#2B2B2BB2" }}
                />
                <div className="absolute top-0 left-0 w-[375px] h-[54px] flex items-center z-30">
                    <Logo />
                </div>
                <div className="absolute pt-[460px] top-[101px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <Moheom />
                </div>
            </div>
        </div>
    );
}
