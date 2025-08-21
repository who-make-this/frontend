import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ReportbgImg from "../../assets/reportbgimg.svg?react";
import Logo from "../../component/Logo";
import ReportContainer from '../../component/ReportContainer';
import { reportsData as mockReportsData } from "../../data/reports";
import rightArrowIcon from '../../assets/circle_arrow_right.svg';
import leftArrowIcon from '../../assets/circle_arrow_left.svg';

// --- 1. 로딩 스피너 컴포넌트 수정 ---
const LoadingSpinner = () => (
    // 반투명 블러 배경
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
        {/* 커지면서 회전하는 점 */}
        <div className="w-12 h-12 bg-green-400 rounded-full animate-grow-rotate"></div>
        <p className="mt-8 text-white text-lg font-semibold">탐험 일지 불러 오는 중...</p>
    </div>
);


export default function ReportPage() {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                // 로딩 시간을 2초로 늘려서 애니메이션을 확인하기 쉽게 함
                await new Promise(resolve => setTimeout(resolve, 2000));
                setReports(mockReportsData);
                if (mockReportsData && mockReportsData.length <= 1) {
                    setIsEnd(true);
                }
            } catch (error) {
                console.error("Failed to fetch reports:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchReports();
    }, []);

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-[375px] h-[812px] bg-white shadow-sm relative overflow-hidden">
                {/* --- 2. 로딩 중일 때 스피너를 오버레이로 렌더링 --- */}
                {loading && <LoadingSpinner />}

                <ReportbgImg 
                    className="absolute top-0 left-0 w-full h-full"
                    preserveAspectRatio="none"
                />
                <div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
                    style={{ backgroundColor: "#2B2B2B4D" }}
                />
                <Logo textColor="text-white" iconColor="white" />
                
                <div className="absolute top-[449px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[650px] z-10">
                    {!loading && reports.length > 0 ? (
                        <>
                            <Swiper
                                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                                onSlideChange={handleSlideChange}
                                spaceBetween={50}
                                slidesPerView={1}
                            >
                                {reports.map((report) => (
                                    <SwiperSlide key={report.id}>
                                        <div className="flex justify-center">
                                            <ReportContainer report={report} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {!isBeginning && (
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    className="absolute top-1/2 left-4 -translate-y-[120%] z-20 transition-opacity"
                                    aria-label="이전 슬라이드"
                                >
                                    <img src={leftArrowIcon} alt="이전" className="w-10 h-10" />
                                </button>
                            )}
                            {!isEnd && (
                                <button
                                    onClick={() => swiperRef.current?.slideNext()}
                                    className="absolute top-1/2 right-4 -translate-y-[120%] z-20 transition-opacity"
                                    aria-label="다음 슬라이드"
                                >
                                    <img src={rightArrowIcon} alt="다음" className="w-10 h-10" />
                                </button>
                            )}
                        </>
                    ) : (
                        !loading && (
                            <div className="flex justify-center items-center h-full">
                                <p className="text-white text-lg font-semibold bg-black/30 p-4 rounded-lg">
                                    아직 기록된 일지가 없어요...
                                </p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
