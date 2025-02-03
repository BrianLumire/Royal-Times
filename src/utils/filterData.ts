// filterData.ts

// Export FilterCriteria so it can be imported in other files
export interface FilterCriteria {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
}

export const filterData = <T extends Record<string, unknown>>(
  data: T[],
  searchTerm: string,
  filters: FilterCriteria
): T[] => {
  return data.filter((item) => {
    // Check if any value in the item includes the searchTerm (case-insensitive)
    const matchesSearch = Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Check if the item matches all filter criteria
    const matchesFilters = Object.keys(filters).every((key) => {
      if (!filters[key]) return true; // Skip if no filter value is provided
      if (!Object.prototype.hasOwnProperty.call(item, key)) return false; // Skip if key doesn't exist

      // Handle array properties
      if (Array.isArray(item[key])) {
        return (item[key] as unknown[]).includes(filters[key]);
      }

      // Handle non-array properties
      const itemValue = String(item[key]).toLowerCase();
      const filterValue = String(filters[key]).toLowerCase();
      return itemValue.includes(filterValue);
    });

    return matchesSearch && matchesFilters;
  });
};
