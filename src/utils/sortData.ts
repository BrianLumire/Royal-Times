// utils/sortData.ts
export const sortData = (data: any[], sortColumn: string | null, sortOrder: "asc" | "desc") => {
    if (!sortColumn) return data;
  
    return data.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
  
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
  
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }
  
      return 0;
    });
  };