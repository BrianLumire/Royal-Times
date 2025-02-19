interface Column {
    header: string;
    accessor: string;
  }
  
  interface Customer {
    id: string;
    route?: string;
    tripCost?: number;
    deliveryCost?: number;
    date: string;
    rating?: number;
    ratingphoto?: string;
    paymentMethod?: string;
    status?: string;
    comment?: string;
    tip?: number;
    customer?: string;
    photo?: string;
    tripType?: string;
    driver?: string;
    amount?:number;
  }

  interface TableProps {
    columns: Column[];
    data: Customer[];
    renderRow: (item: Customer) => React.ReactNode;
    title?: string; // Optional title prop
  }
  
  const Table: React.FC<TableProps> = ({ columns, data, renderRow, title }) => {
    return (
      <div className="rounded-lg bg-white dark:bg-[#1E1E1E] shadow-lg">
        {/* Table Title */}
        {title && (
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between  rounded-[10px] px-2 py-3 mb-4">
            <p className="font-sans font-semibold text-sm md:text-base text-black dark:text-white">
              {title} 
            </p>
          </div>
        )}
  
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px]">
            {/* Table Header */}
            <thead className="bg-[#F5F5F5] dark:bg-[#2A2A2A]">
              <tr className="py-4">
                {columns.map((col) => (
                  <th
                    key={col.accessor}
                    className="px-1 py-3 text-left font-sans text-sm font-medium text-black"
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
  
            {/* Table Body */}
            <tbody>
              {data.length > 0 ? (
                data.map((item) => renderRow(item))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-6 text-center text-red-400 dark:text-red-400"
                  >
                    No results found!?
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Table;