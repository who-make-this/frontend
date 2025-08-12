import React, { useState } from "react";
import Logo from "../../component/Logo";
import MyPageImg from "../../assets/mypageimg.svg";
import TicketImg from "../../assets/ticket.svg";
import CouponModal from "../../component/couponModal";

export default function MyPage() {
    // 모달의 열림/닫힘 상태를 관리하는 State 추가
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 사라지는 애니메이션을 위한 상태 추가
    const [isClosing, setIsClosing] = useState(false);

    // 티켓 정보 데이터
    const ticketData = {
        adventurer: "후메잌디스!!",
        place: "구미 새마을중앙시장",
        date: "16/08/2025",
        explorations: 16,
        coupons: 0,
        cleared: 42,
    };

    // 마일리지 데이터
    const mileageData = {
        current: 4000, 
        max: 5000,
    };
    
    const progressPercentage = Math.min((mileageData.current / mileageData.max) * 100, 100);

    // 모달을 닫는 함수 (사라지는 애니메이션 포함)
    const handleCloseModal = () => {
        setIsClosing(true); // 닫힘 애니메이션 시작
        // 애니메이션 시간(250ms) 후 모달을 완전히 제거
        setTimeout(() => {
            setIsModalOpen(false);
            setIsClosing(false); // 상태 초기화
        }, 250);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* 앱 화면 컨테이너 (하단 공백 문제 해결을 위해 모달이 이 안에 위치해야 함) */}
            <div className="w-[375px] h-[812px] bg-white shadow-sm relative overflow-hidden">
                {/* 배경 이미지 */}
                <img
                    src={MyPageImg}
                    alt="MyPage Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* 로고 컴포넌트 */}
                <Logo textColor="text-black" iconColor="black" />

                {/* 티켓 이미지 (배경 역할) */}
                <img
                    src={TicketImg}
                    alt="미션 인증"
                    className="w-[355px] h-[655px] absolute top-[103px] left-1/2 -translate-x-1/2 object-contain"
                />
                
                {/* 티켓 콘텐츠를 담는 컨테이너 */}
                <div className="absolute top-[102px] left-1/2 -translate-x-1/2 w-[355px] h-[655px] px-8 py-10 flex flex-col">
                    
                    {/* Adventurer 정보 */}
                    <div className="flex justify-between items-start ml-[10px] mt-10">
                        <div>
                            <p className="text-[#2B2B2B80] text-[15px] font-medium">Adventurer:</p>
                            <p className="text-[#2B2B2B] text-2xl font-[750] mt-0 leading-[140%] tracking-[-0.3px]">{ticketData.adventurer}</p>
                        </div>
                    </div>

                    {/* 상세 정보 */}
                    <div className="mt-6">
                        <div
                            className="w-[270px] h-[2px] mx-auto mt-[17px]"
                            style={{
                                backgroundImage: "linear-gradient(to right, #9A8C4F 50%, transparent 50%)",
                                backgroundSize: "18px 1.2px",
                                backgroundRepeat: "repeat-x",
                            }}
                        ></div>
                        
                        <div className="relative mt-[65px] h-12">
                            <div className="absolute left-[11px]">
                                <p className="text-[15px] font-[400] text-[#2B2B2B80]">Place</p>
                                <p className="text-[16px] font-semibold">{ticketData.place}</p>
                            </div>
                            <div className="absolute right-3">
                                <p className="text-[15px] font-[400] text-[#2B2B2B80]">Date</p>
                                <p className="text-[16px] font-semibold text-right">{ticketData.date}</p>
                            </div>
                        </div>

                        <div className="relative h-12 mt-7">
                            <div className="absolute left-[11px]">
                                <p className="text-[15px] font-[400] text-[#2B2B2B80]">Explorations</p>
                                <p className="text-[16px] font-semibold">{ticketData.explorations}</p>
                            </div>
                            <div className="absolute right-[48px]">
                                <p className="text-[15px] font-[400] text-[#2B2B2B80]">Cleared</p>
                                <p className="text-[16px] font-semibold text-start">{ticketData.cleared}</p>
                            </div>
                        </div>
                    </div>
                    
                    <hr className="w-[267px] mx-auto mt-[30px] border-t border-[1.1px] border-[#9A8C4F33]" />

                    {/* 마일리지 섹션 */}
                    <div className="flex flex-col w-[269px] mx-auto mt-[24px] space-y-[2px]">
                        {/* 상단 영역: 제목과 버튼 */}
                        <div className="flex justify-between items-center">
                            <p className="text-[15px] font-[400] text-[#2B2B2B80]">Mileage</p>
                            {/* 버튼 클릭 시 모달을 열도록 onClick 이벤트 추가 */}
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="border-[0.7px] border-[#2B2B2B80] rounded-full px-[14px] py-[3px] text-[14px] font-semibold text-[#2B2B2B] tracking-[-0.1px]"
                            >
                                쿠폰 목록
                            </button>
                        </div>

                        {/* 획득 마일리지 표시 */}
                        <p className="text-[17px] font-bold text-gray-800 text-start">
                            {mileageData.current.toLocaleString()}
                        </p>

                        {/* 프로그레스 바와 라벨 */}
                        <div className="mt-5">
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div 
                                    className="bg-gradient-to-r from-[#A47764] to-[#D19B98] h-4 rounded-full" 
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-sm font-[400] text-[#2B2B2B80] mt-1">
                                <span>0</span>
                                <span>{mileageData.max.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* isModalOpen이 true일 때만 CouponModal을 렌더링 (앱 화면 내부에 위치) */}
                {isModalOpen && <CouponModal onClose={handleCloseModal} isClosing={isClosing} />}
            </div>
        </div>
    );
}