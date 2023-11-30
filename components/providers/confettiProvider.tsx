"use client";

import ReactConfetti from "react-confetti";
import { useConfettiStore } from "@/hooks/use-confetti-store";

export const ConffetiProvider = () => {
  const confeti = useConfettiStore();

  if (!confeti.isOpen) return null;
  return (
    <ReactConfetti
      className="pointer-events-none z-[100]"
      numberOfPieces={500}
      recycle={false}
      onConfettiComplete={() => {
        confeti.onClose();
      }}
    />
  );
};
