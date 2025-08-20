import React from "react";
import Logo from "../../component/Logo";
import ReportbgImg from "../../assets/reportbgimg.svg?react";
import ReportCard from "../../component/ReportCard"; // 1. ReportCard 컴포넌트 임포트
import { reportsData } from "../../data/reports";   // 2. 리포트 데이터 임포트

// 3. Swiper 관련 임포트
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ReportPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[375px] h-[812px] bg-white shadow-sm relative overflow-hidden">
        <ReportbgImg 
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        />
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
          style={{ backgroundColor: "#2B2B2B4D" }}
        />
        <Logo textColor="text-white" iconColor="white" />
        
        {/* --- ⬇️ 4. Swiper를 사용하여 리포트 카드들을 렌더링 ⬇️ --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[550px] z-10">
          <Swiper
            spaceBetween={50} // 카드 사이 여백
            slidesPerView={1}  // 한 번에 하나씩 보이기
          >
            {reportsData.map((report) => (
              <SwiperSlide key={report.id}>
                <div className="flex justify-center">
                  <ReportCard reportData={report} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}