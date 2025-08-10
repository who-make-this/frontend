import { useState } from "react";
import eatImg from "../assets/eat.svg";
import refresh from "../assets/iconoir_refresh.svg";
import refresh_black from "../assets/iconoir_refresh_black.svg";

export default function MissionCard() {
  const [clicked, setClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // 클릭 시 새로고침 또는 다른 동작 넣어도 됨
    // 예: window.location.reload();
    setClicked(true);
  };

  return (
    <div
      className="relative w-[306px] h-[464px] rounded-4xl"
      style={{
        background: "linear-gradient(135deg, #9A8C4F 0%, #D19B98 100%)",
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
      <div className="flex justify-between p-6 text-[16px]">
        <div className="w-[69px] bg-[#FFFAFA70] flex justify-center rounded-full">
          먹보형
        </div>
        <div>No.1</div>
      </div>

      {/* 타입 이미지 */}
      <div className="flex justify-center pt-12">
        <img src={eatImg} alt="타입 이미지" draggable={false} />
      </div>

      {/* 미션 설명 */}
      <div className="flex flex-col px-8 py-4">
        <div className="flex font-extrabold text-[28px]">미션 제목</div>
        <div className="flex text-[16px]">미션 설명설명</div>
      </div>
    </div>
  );
}
