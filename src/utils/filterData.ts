// utils/filterData.ts
export const filterData = (data: any[], searchTerm: string, filters: any) => {
    return data.filter((item) => {
      // Search across all columns
      const matchesSearch = Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      // Apply filters (if any)
      const matchesFilters = Object.keys(filters).every((key) => {
        if (!filters[key]) return true; // Skip if no filter is applied
        return item[key] === filters[key];
      });
  
      return matchesSearch && matchesFilters;
    });
  };