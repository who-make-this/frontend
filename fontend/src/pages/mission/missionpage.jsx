import React from "react";
import MainPageImg from "../../assets/mainPage.svg";
import Logo from "../../component/logo";
import MissionStatus from "../../component/missionStatus";
import MissionCard from "../../component/missionCard";
import typeEat from "../../assets/type_eat.png";
import typeMood from "../../assets/type_mood.png";
import typeTravel from "../../assets/type_travel.png";
import exit from "../../assets/exit.svg";
import vectorCamera from "../../assets/vectorCamera.svg";

export default function MissionPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[375px] h-[812px] bg-white shadow-sm relative flex items-center justify-center overflow-hidden">
        <img
          src={MainPageImg}
          alt="Main Page"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 backdrop-blur-[10px]"
          style={{ backgroundColor: "#2B2B2BB2" }}
        />
        <div className="absolute top-0 left-0 w-[375px] h-[32px] flex items-center z-30">
          <Logo />
        </div>

        {/* 유형별 미션 완료 상태 */}
        <div className="absolute top-[108px] flex flex-row w-[349px] z-10">
          <div className="flex w-full gap-2">
            <MissionStatus
              icon={typeMood}
              label="감성형"
              value={12}
              bgColor="#A792B960"
            />
            <MissionStatus
              icon={typeEat}
              label="먹보형"
              value={8}
              bgColor="#D19B9860"
            />
            <MissionStatus
              icon={typeTravel}
              label="탐험형"
              value={5}
              bgColor="#889F6960"
            />
          </div>
        </div>

        {/* 미션 카드 */}
        <div className="absolute flex justify-center z-15">
            <MissionCard></MissionCard>
        </div>

        {/* 종료 + 인증 버튼 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[349px] px-4 flex justify-between z-10">
          <button className="w-[145px] h-[53px] flex items-center gap-2 px-4 py-2 border-2 border-white rounded-xl text-white">
            <img
              src={exit}
              className="w-[24px] h-[24px] object-contain"
              alt="탐험 종료"
            />
            <div className="ps-2">탐험 종료</div>
          </button>
          <button className="w-[145px] h-[53px] flex items-center gap-2 px-4 py-2 border-2 border-black rounded-xl text-black bg-white">
            <img
              src={vectorCamera}
              className="w-[24px] h-[24px] object-contain"
              alt="미션 인증"
            />
            <div className="ps-2">미션 인증</div>
          </button>
        </div>
      </div>
    </div>
  );
}
