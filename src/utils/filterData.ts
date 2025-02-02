export const filterData = (data: any[], searchTerm: string, filters: any) => {
  return data.filter((item) => {
    // Search across all columns
    const matchesSearch = Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Apply filters (if any)
    const matchesFilters = Object.keys(filters).every((key) => {
      if (!filters[key]) return true; // Skip if no filter is applied

      // Check if the filter key exists in the item
      if (!item.hasOwnProperty(key)) return false;

      // Handle array fields (e.g., availablefor, currentorder)
      if (Array.isArray(item[key])) {
        return item[key].includes(filters[key]);
      }

      // Compare filter value with item value (case-insensitive for strings)
      const itemValue = String(item[key]).toLowerCase();
      const filterValue = String(filters[key]).toLowerCase();

      return itemValue.includes(filterValue);
    });

    return matchesSearch && matchesFilters;
  });
};