import Image from "next/image";

interface CancelReasonsProps {
  reasonText: string;
  count: string | number;
}

const reasonToIconMap: { [key: string]: string } = {
  "Driver asked me to cancel or rider off the app": "/identifier-1.svg",
  "Disagreement": "/identifier-2.svg",
  "Requested by mistake": "/identifier-3.svg",
  "Driver took too long": "/identifier-6.svg",
  "Other": "/identifier-7.svg",
};

const CancelReasons: React.FC<CancelReasonsProps> = ({ reasonText, count }) => {
  const iconSrc = reasonToIconMap[reasonText] || "/default-icon.svg"; // Fallback icon if reason is not found

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src={iconSrc} alt="Reason Icon" width={13} height={13} />
        <span className="font-sans text-xs whitespace-normal break-words max-w-[190px] md:max-w-[220px]">
          {reasonText}
        </span>
      </div>
      <span className="font-sans text-sm">{count}</span>
    </div>
  );
};

export default CancelReasons;