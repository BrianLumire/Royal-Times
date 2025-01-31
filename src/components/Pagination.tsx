import Image from "next/image";

const Pagination = () => {
    return (
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-1">
          <p className="font-sans font-medium text-sm">Showing 1-09 of</p>
          <span className="font-sans font-medium text-sm"> 78</span>
        </div>

        <div className="border flex items-center border-gray-400 gap-6 rounded-xl p-1">
          <Image src="/left-arrow.svg" alt="" width={12} height={12}/>
          <Image src="/right-arrow.svg" alt="" width={12} height={12}/>
        </div>
      </div>
    );
  };
  
  export default Pagination; 