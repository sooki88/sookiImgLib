import { useState } from "react";
import Button from "./Button";

interface SearchBarProps {
  placeholder: string;
  handleSearch: (value: string) => void;
}

export default function SearchBar({
  placeholder,
  handleSearch,
}: SearchBarProps) {
  const [value, setValue] = useState<string>("티셔츠");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(value);
    }
  };

  return (
    <div className="relative flex gap-2">
      <img
        src="/images/search.svg"
        alt="검색 버튼"
        className="absolute w-5 h-5 top-3 left-3"
      />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className={`flex items-center justify-between w-[300px] h-[44px] pl-9 pr-3 rounded-md border border-gray-400 bg-gray-100 base-medium text-gray-600 placeholder:base-regular placeholder:text-[#CFCFCF]`}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button variant="secondary" onClick={() => handleSearch(value)}>
        검색
      </Button>
    </div>
  );
}
