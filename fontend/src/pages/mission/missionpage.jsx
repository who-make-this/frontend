import React, { useState, useEffect } from "react";
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
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupActive, setPopupActive] = useState(false);

  const missions = [
    {
      type: "먹보형",
      number: 5,
      title: "먹보 미션",
      description: "먹자 먹자 미션",
    },
  ];

  const openPopup = () => {
    setPopupVisible(true);
    setTimeout(() => setPopupActive(true), 20);
  };

  const closePopup = () => {
    setPopupActive(false);
    setTimeout(() => setPopupVisible(false), 300);
  };

  useEffect(() => {
    document.body.style.overflow = popupVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [popupVisible]);

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

        {/* 타입별 현황 */}
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
          {missions.map((mission, index) => (
            <MissionCard key={index} {...mission} />
          ))}
        </div>

        {/* 하단 버튼 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[349px] px-4 flex justify-between z-10">
          <button
            onClick={openPopup}
            className="w-[145px] h-[53px] flex items-center gap-2 px-4 py-2 border border-white rounded-xl text-white"
          >
            <img
              src={exit}
              className="w-[24px] h-[24px] object-contain"
              alt="탐험 종료"
            />
            <div className="ps-2">탐험 종료</div>
          </button>
          <button className="w-[145px] h-[53px] flex items-center gap-2 px-4 py-2 border border-black rounded-xl text-black bg-white">
            <img
              src={vectorCamera}
              className="w-[24px] h-[24px] object-contain"
              alt="미션 인증"
            />
            <div className="ps-2">미션 인증</div>
          </button>
        </div>

        {/* 탐험 종료 팝업 */}
        {popupVisible && (
          <>
            <div
              className={`absolute inset-0 z-40 transition-opacity duration-300 ${
                popupActive ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              onClick={closePopup}
            />
            <div
              role="dialog"
              aria-modal="true"
              className={`absolute bottom-0 left-0 w-full z-50 transform transition-transform duration-300 ease-out ${
                popupActive ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div className="bg-white rounded-t-2xl p-8 pb-16">
                <div className="text-2xl font-medium p-1">탐험 종료</div>
                <div className="p-1 mb-6">
                  하루에 한 번만 탐험이 가능합니다. 지금 탐험을 종료하면, 오늘은
                  더 이상 진행할 수 없어요.
                  <div className="text-[#9A8C4F]">
                    ( 해커톤 행사 기간엔 해당 없음 )
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    className="flex-1 py-3 rounded-full bg-gray-200 text-gray-800"
                    onClick={closePopup}
                  >
                    그만하기
                  </button>
                  <button
                    className="flex-1 py-3 rounded-full bg-[#9A8C4F] text-white"
                    onClick={closePopup}
                  >
                    탐험 계속하기
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
