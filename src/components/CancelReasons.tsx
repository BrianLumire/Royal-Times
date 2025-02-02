import Image from "next/image";

interface CancelReasonsProps {
  iconSrc: string;
  reasonText: string;
  count: string | number;
}

const CancelReasons: React.FC<CancelReasonsProps> = ({ iconSrc, reasonText, count }) => {
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
