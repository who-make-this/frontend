import React, { useState } from "react";
import statusbar from "../assets/statusBar.svg";
import topMenu from "../assets/top_menu.svg";
import closeIcon from "../assets/close.svg";

export default function Logo() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <img src={statusbar} alt="Status Bar" className="absolute top-0 left-0 w-full h-[44px] object-cover z-10" />
            <div className={`absolute top-[44px] left-0 w-[375px] ${menuOpen ? "h-[215px]" : "h-[54px]"} backdrop-blur-[10px] z-20 transition-all duration-[250ms] overflow-hidden`}>
                <div className="flex items-center h-[54px] w-full">
                    <button className="ml-[13px] py-2">
                        <span
                            className="text-white"
                            style={{
                                fontFamily: 'MuseumClassic, sans-serif',
                                fontWeight: 700,
                                fontSize: '25px',
                                lineHeight: '140%',
                                letterSpacing: '-0.625px',
                            }}
                        >
                            시장탐험대
                        </span>
                    </button>
                    <button
                        className="ml-auto mr-[13px] transition-all duration-[250ms] relative w-6 h-6 flex items-center justify-center"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <img
                            src={topMenu}
                            alt="Menu Icon"
                            className={`absolute transition-opacity duration-[250ms] ${menuOpen ? "opacity-0" : "opacity-100"}`}
                            style={{ top: 0, left: 0 }}
                        />
                        <img
                            src={closeIcon}
                            alt="Close Icon"
                            className={`absolute transition-opacity duration-[250ms] ${menuOpen ? "opacity-100" : "opacity-0"}`}
                            style={{ top: 0, left: 0 }}
                        />
                    </button>
                </div>
                <div className={`w-full transition-all duration-[250ms] ${menuOpen ? "opacity-100 py-4" : "opacity-0 py-0"} flex flex-col items-start px-3 py-1 space-y-7   `}>
                    {menuOpen && (
                        <>
                            <button className="text-white text-[16px] font-bold">시장의 비밀 이야기</button>
                            <button className="text-white text-[16px] font-bold">탐험 일지</button>
                            <button className="text-white text-[16px] font-bold">탐험가 정보</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}