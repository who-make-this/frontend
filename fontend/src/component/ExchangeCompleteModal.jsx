import React from 'react';

// isClosing 상태를 받아 애니메이션을 제어합니다.
export default function ExchangeCompleteModal({ coupon, onCloseAll, isClosing }) {
  // coupon 데이터가 없으면 아무것도 렌더링하지 않습니다.
  if (!coupon) return null;

  // TODO: 백엔드로부터 받은 실제 QR 코드 URL 또는 데이터로 교체해야 합니다.
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=GumiLoveCoupon-${coupon.value}-${Date.now()}`;

  return (
    <div 
      className={`absolute inset-0 flex justify-center pt-[152px] z-70
                  ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
    >
      {/* --- ⬇️ 이 코드 전체를 교체해주세요 ⬇️ --- */}
      <div 
        className="bg-[#FFFAFA] rounded-[20px] px-6 py-8 w-[349px] h-[542px] mx-4 flex flex-col" // text-center 제거
        onClick={(e) => e.stopPropagation()}
      >
        {/* 상단 컨텐츠 (왼쪽 정렬) */}
        <div className="text-left ml-2 mt-[6px]">
          <h2 className="text-[#2B2B2B] font-semibold text-[25px] mb-2 tracking-[-1px]">
            {coupon.name} 발급
          </h2>
          <p className="text-[#2B2B2BCC] text-[16px] font-[500] leading-snug">
            구미사랑상품권 {coupon.name}을 발급했어요.
            <br />
            아래 qr코드를 저장해 간편하게 결제해보세요.
          </p>
        </div>

        {/* QR 코드 이미지 (상단 마진으로 간격 조절) */}
        <div className="flex justify-center mt-[7px]">
          <img 
            src={qrCodeUrl} 
            alt={`${coupon.name} QR Code`} 
            className="w-[289px] h-[289px]"
          />
        </div>

        {/* 하단 버튼 (mt-auto로 맨 아래로 밀어냄) */}
        <div className="flex justify-center mt-[25px]">
          <button 
            onClick={onCloseAll} // TODO: 실제로는 QR코드 저장 로직을 실행해야 합니다.
            className="w-[289px] h-[50px] bg-[#9A8C4F] text-white font-semibold py-3 rounded-[40px] hover:bg-[#8a7c47] transition-colors"
          >
            QR코드 저장하기
          </button>
        </div>
      </div>
    </div>
  );
}