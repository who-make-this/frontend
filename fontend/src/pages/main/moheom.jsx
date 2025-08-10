import React from "react";

export default function Moheom() {
    return (
        <div className="relative w-[349px] h-[655px] mx-auto">
            <div className="absolute left-1/2 top-[356px] -translate-x-1/2 -translate-y-1/2 z-20 w-[349px] h-[72px] flex items-center justify-center">
                <span className="text-white text-[30px] font-bold text-center w-full leading-[120%] tracking-[-2px]">
                    뭐라도 <br /> 보여드리겠습니다
                </span>
            </div>
            <div className="absolute left-1/2 top-[408px] -translate-x-1/2 z-20 w-[349px] h-[52px] flex items-center justify-center">
                <span className="text-white text-[16px] w-full text-center leading-[160%] tracking-[-0.375px]">
                    안녕O연아너를처음본순간부터좋아했어방학전에고백하고싶었는데바보같이그땐용기가없더라지금
                </span>
            </div>
            <div className="absolute left-1/2 top-[485px] -translate-x-1/2 z-20 w-[125px] h-[53px] flex items-center justify-center">
                <button
                    className="bg-white rounded-[24px] text-black text-[18px] font-semibold text-center w-full leading-[140%] tracking-[-2px] py-3 transition-all duration-250 ease-in-out active:scale-x-[1.088] active:scale-y-[1.132] active:bg-[#A47764] active:text-white"
                >
                    탐험 시작
                </button>
            </div>
        </div>
    );
}
