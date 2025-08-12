import React from "react";

// isClosing 상태를 props로 전달받습니다.
export default function CouponModal({ onClose, isClosing }) {
  const coupons = [
    { name: "1만원권", available: true },
    { name: "3만원권", available: true },
    { name: "5만원권", available: false },
  ];

  return (
    <div 
      className={`absolute inset-0 bg-black/50 flex justify-center items-end z-50 
                  ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[375px] h-[300px] rounded-t-2xl px-6 pt-6 pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[24px] mt-3 ml-2 font-semibold mb-8 text-[#2B2B2B] tracking-[-0.75px]">구미사랑상품권</h2>
        <div className="space-y-5">
          {coupons.map((coupon, index) => (
            <div key={index} className="flex justify-between items-center ml-2">
              <p className="text-lg font-medium text-[#2B2B2B]">{coupon.name}</p>
              <button
                disabled={!coupon.available}
                className={`rounded-full px-5 py-2 mr-2 text-sm font-semibold transition-colors
                  ${coupon.available 
                    ? "bg-[#9A8C4F] text-white cursor-pointer" 
                    : "bg-[#9A8C4F4D] text-white cursor-not-allowed"
                  }`}
              >
                교환하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}