interface CancelReasonsProps {
  reasonText: string;
  count: string | number;
  iconBg?: string; // Optional background color prop
}

const CancelReasons: React.FC<CancelReasonsProps> = ({
  reasonText,
  count,
  iconBg = "#B68E00", // Default background color
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Placeholder div for icon */}
        <div className="flex items-center" />
        <div className={`w-3 h-3 rounded-full ${iconBg} flex items-center justify-center`}>
          <div className="w-1 h-1 rounded-full bg-white" />
        </div>
        <span className="font-sans text-xs whitespace-normal break-words max-w-[190px] md:max-w-[220px]">
          {reasonText}
        </span>
      </div>
      <span className="font-sans text-sm">{count}</span>
    </div>
  );
};

export default CancelReasons;
