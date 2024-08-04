import { ReactNode } from "react";

type VariantType = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  variant: VariantType;
  disabled?: boolean;
  onClick: () => void;
}

export default function Button({
  children,
  variant,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center gap-1 rounded-md base-bold h-[44px] px-5 border ${
        variant === "primary"
          ? "text-main border-main"
          : "text-gray-500 border-gray-400"
      } bg-gray-100 hover:bg-gray-200`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
