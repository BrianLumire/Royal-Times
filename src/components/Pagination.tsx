const Pagination = () => {
    return (
      <div className="p-4 flex items-center justify-between text-gray-600">
        <button
          disabled
          className="py-2 px-4 rounded-xl bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <div className="flex items-center gap-2 text-sm">
          <button className="px-2 rounded-[8px] bg-[#FFEDDF]">1</button>
          <button className="px-2 rounded-[8px] ">2</button>
          <button className="px-2 rounded-[8px] ">3</button>
          ...
          <button className="px-2 rounded-[8px] ">10</button>
        </div>
        <button className="py-2 px-4 rounded-xl bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;