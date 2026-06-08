"use client";

import WorldCupPopup from "./WorldCupPopup";
import TelegramPopup from "./TelegramPopup";

interface ClientPopupWrapperProps {
  showPopup: boolean;
  disableWcPopup: boolean;
  disableTgPopup: boolean;
}

export default function ClientPopupWrapper({
  showPopup,
  disableWcPopup,
  disableTgPopup,
}: ClientPopupWrapperProps) {
  if (!showPopup) return null;

  return (
    <>
      {!disableWcPopup && <WorldCupPopup showPopup={showPopup} />}
      {!disableTgPopup && <TelegramPopup showPopup={showPopup} />}
    </>
  );
}
