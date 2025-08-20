import React from 'react';
import ReportCardFrame from '../assets/reportpage.svg';
import HeadphoneIcon from '../assets/gumilogo.svg';
import StampSuccess from '../assets/successStamp.svg';
import ReportGrid from '../assets/reportGrid.svg'; // 1. 그리드 SVG 이미지 임포트

import ClocheIcon from '../assets/typeeat.svg';
import TravelIcon from '../assets/typetravel.svg';
import MoodIcon from '../assets/typemood.svg';

export default function ReportCard({ reportData }) {
    if (!reportData) return null;

    const typeIcons = {
        '먹보형': ClocheIcon,
        '모험형': TravelIcon,
        '감성형': MoodIcon,
    };

    const MainTypeIcon = typeIcons[reportData.mainType] || ClocheIcon;

    return (
        <div className="w-[349px] h-[542px] relative">
            {/* 레이어 1: 가장 아래에 깔리는 메모장 배경 */}
            <img src={ReportCardFrame} alt="리포트 배경" className="absolute inset-0 w-full h-full z-10" />
            
            {/* --- ⬇️ 2. ReportGrid.svg를 중간 레이어로 추가했습니다 ⬇️ --- */}
            <img src={ReportGrid} alt="리포트 그리드" className="absolute inset-0 w-full h-full z-20" />

            {/* 레이어 3: 가장 위에 올라오는 실제 콘텐츠 */}
            <div className="relative z-30 p-8 flex flex-col h-full">
                <header className="flex justify-between items-start">
                    <h1 className="text-2xl font-bold text-gray-800">{reportData.marketName} 탐험</h1>
                    <img src={HeadphoneIcon} alt="음성 듣기" className="w-[60px] h-[60px]" />
                </header>

                <section className="flex items-center gap-4 mt-4  pb-4">
                    <div className="flex flex-col items-center">
                        <img src={MainTypeIcon} alt="대표 유형" className="w-[87px] h-[87px] mt-6 ml-1" />
                        <span className="-mt-0.5 text-sm font-semibold text-gray-600">{reportData.mainType}</span>
                    </div>
                    <div className="-mt-7">
                        <p className="text-[16px] text-white">탐험 일시</p>
                        <p className="font-bold text-gray-700">{reportData.date}</p>
                        <p className="font-semibold text-gray-600">{reportData.timeRange}</p>
                    </div>
                </section>
                
                {/* --- ⬇️ 3. 점수 표를 이전의 flex 방식으로 되돌렸습니다 ⬇️ --- */}
                <section className="flex justify-around text-center mt-4">
                    <div><p className="text-sm text-gray-500">감성형</p><p className="text-2xl font-bold text-gray-800">{reportData.scores.sensitivity}</p></div>
                    <div><p className="text-sm text-gray-500">먹보형</p><p className="text-2xl font-bold text-gray-800">{reportData.scores.foodie}</p></div>
                    <div><p className="text-sm text-gray-500">모험형</p><p className="text-2xl font-bold text-gray-800">{reportData.scores.adventure}</p></div>
                </section>

                <footer className="mt-auto relative">
                    <p className="text-sm font-bold text-gray-600 mb-2">결과</p>
                    <div className="space-y-3 text-gray-700">
                        <div className="flex justify-between items-center border-b border-dashed border-gray-400 pb-1"><span>점수 합계</span><span className="font-bold">{reportData.results.totalScore}점</span></div>
                        <div className="flex justify-between items-center border-b border-dashed border-gray-400 pb-1"><span>획득 마일리지</span><span className="font-bold text-blue-600">{reportData.results.mileage}</span></div>
                        <div className="flex justify-between items-center"><span>이번 달 까지</span><span className="font-bold">{reportData.results.thisMonthTotal}</span></div>
                    </div>
                    {reportData.status === "성공" && (<img src={StampSuccess} alt="탐험 성공" className="absolute -bottom-4 -right-4 w-28 h-28" />)}
                </footer>
            </div>
        </div>
    );
}