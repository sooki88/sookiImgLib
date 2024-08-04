import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  return (
    portalRoot &&
    createPortal(
      <div
        onClick={handleClose}
        className="fixed inset-0 z-30 flex items-center justify-center w-full h-full bg-overlay"
      >
        <section className="relative z-40 flex flex-col items-center justify-center px-10 pb-10 text-center bg-gray-100 rounded-md shadow-2xl py-14">
          {children}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 flex items-center justify-center px-0.5 hover:bg-gray-200 rounded-md"
          >
            <img src="/images/close.svg" alt="닫기 버튼" className="w-8 h-8" />
          </button>
        </section>
      </div>,
      document.body
    )
  );
}
