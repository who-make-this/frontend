import { useState } from "react";
import refresh from "../assets/iconoir_refresh.svg";
import refresh_black from "../assets/iconoir_refresh_black.svg";


import eatImg from "../assets/eat.svg";
import moodImg from "../assets/mood.svg";
import exploreImg from "../assets/explore.svg";

export default function MissionCard({ type, number, title, description }) {
  const [clicked, setClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 타입별 색상 + 이미지 매핑
  const typeStyles = {
    먹보형: {
      colors: ["#9A8C4F", "#D19B98"],
      image: eatImg,
    },
    감성형: {
      colors: ["#6A5ACD", "#FFB6C1"],
      image: moodImg,
    },
    탐험형: {
      colors: ["#00B4DB", "#0083B0"],
      image: exploreImg,
    },
  };

  // fallback: type이 잘못 들어올 경우 기본값
  const { colors, image } =
    typeStyles[type] || typeStyles["먹보형"];

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div
      className="relative w-[306px] h-[464px] rounded-4xl"
      style={{
        background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
      }}
    >
      {/* 새로고침 버튼 */}
      <button
        className={`absolute w-10 h-10 flex items-center backdrop-blur justify-center rounded-full transition
          ${isHovered ? "bg-white/50" : "bg-white/20 hover:bg-white/50"}`}
        aria-label="새로고침"
        onClick={handleClick}
        style={{ top: "-16px", right: "-16px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered || clicked ? refresh_black : refresh}
          alt="새로고침 아이콘"
          className="w-6 h-6"
          draggable={false}
        />
      </button>

      {/* 카드 태그 */}
      <div className="flex justify-between p-6 text-[16px] text-gray-800">
        <div className="w-[69px] bg-[#FFFAFA70] flex justify-center rounded-full">
          {type}
        </div>
        <div>No.{number}</div>
      </div>

      {/* 타입 이미지 */}
      <div className="flex justify-center pt-12">
        <img src={image} alt={`${type} 이미지`} draggable={false} />
      </div>

      {/* 미션 설명 */}
      <div className="flex flex-col px-8 py-4">
        <div className="flex font-extrabold text-[28px]">{title}</div>
        <div className="flex font-light text-[16px]">{description}</div>
      </div>
    </div>
  );
}
