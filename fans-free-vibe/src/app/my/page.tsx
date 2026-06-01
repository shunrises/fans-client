import Image from "next/image";
import myFans from "@/assets/icons/my-fans.svg";

const ChevronRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 12L10 8L6 4"
      stroke="#111111"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function MenuItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-[18px]">
      <span className="text-[#111] text-[16px] leading-[21px] tracking-[-0.2px] font-normal">
        {label}
      </span>
      <ChevronRight />
    </div>
  );
}

function SectionGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="w-full">
      <div className="px-4 pb-[14px] pt-6">
        <span className="text-[#949494] text-[14px] leading-[19px] tracking-[-0.2px] font-semibold">
          {title}
        </span>
      </div>
      {items.map((item) => (
        <MenuItem key={item} label={item} />
      ))}
    </div>
  );
}

const sections = [
  {
    title: "설정",
    items: ["내 정보", "멤버십 관리"],
  },
  {
    title: "서비스 정보",
    items: ["이용약관", "개인정보 처리 방침"],
  },
  {
    title: "고객 지원",
    items: ["자주 묻는 질문", "연락처 정보"],
  },
  {
    title: "업데이트 정보",
    items: ["버전 기록", "새로운 기능"],
  },
];

export default function MyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-20 border-b border-glass-border bg-glass backdrop-blur-lg backdrop-saturate-[1.15] transform-gpu">
        <div className="mx-auto max-w-[630px] px-4 pt-6 pb-4 flex flex-col items-start">
            <Image src={myFans} alt="MY FANS" className="h-[18px] w-auto" />
          <div className="pt-[10px]">
            <span className="text-[#949494] text-[16px] leading-[21px] tracking-[-0.2px] font-normal">
              2newzero@naver.com
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-[630px] flex-1 pb-[50px]">
        {sections.map((section, i) => (
          <div key={section.title}>
            {i > 0 && <div className="h-2 bg-[#f8f8f8]" />}
            <SectionGroup title={section.title} items={section.items} />
          </div>
        ))}
        <div className="h-2 bg-[#f8f8f8]" />
      </div>
    </div>
  );
}
