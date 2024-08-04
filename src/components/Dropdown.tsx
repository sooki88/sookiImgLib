import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  list: { text: string; value: string }[];
  selectedItem?: string;
  disabled?: boolean;
  styles?: string;
  onClick: (selectedValue: string) => void;
}

export default function Dropdown({
  list,
  selectedItem,
  disabled = false,
  onClick,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const outRef = useRef<HTMLDivElement>(null);

  const findListByValue = list.find((item) => item.value === selectedItem);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (outRef.current && !outRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="relative" ref={outRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-[128px] h-[44px] pl-4 pr-2 rounded-md border border-gray-400 bg-[#fff] base-medium"
        disabled={disabled}
      >
        <span className="text-gray-600">{findListByValue?.text}</span>
        <img
          src="/images/arrow_drop_down.svg"
          alt="드롭 박스 여닫는 화살표 버튼"
          className={`w-[26px] h-[26px] ${isOpen && "rotate-180"}`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-[43.5px] left-0 flex flex-col w-[128px] py-2 bg-gray-100 rounded-[5px] border border-gray-400 z-20 drop-shadow-md">
          {list.map((item) => (
            <div
              key={item.value}
              onClick={() => {
                onClick(item.value);
                setIsOpen(false);
              }}
              className={`flex items-center gap-1 w-full px-4 h-[40px] base-regular text-gray-600 hover:bg-gray-300 ${
                item.value === selectedItem && "bg-gray-200"
              } `}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
