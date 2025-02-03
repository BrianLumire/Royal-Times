// Define the filter criteria interface
interface FilterCriteria {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
}

// filterData takes an array of objects (data), a search term, and a filters object.
// It returns a filtered array of objects that match the search and filter criteria.
export const filterData = <T extends Record<string, unknown>>(
  data: T[],
  searchTerm: string,
  filters: FilterCriteria
): T[] => {
  return data.filter((item) => {
    // Check if any value in the item (converted to string) includes the searchTerm (case-insensitive)
    const matchesSearch = Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );

    // For each key in filters, verify that if a filter is applied, the corresponding
    // property in the item either:
    //  - If it is an array, includes the filter value
    //  - Or, if not an array, its string representation includes the filter value (case-insensitive)
    const matchesFilters = Object.keys(filters).every((key) => {
      // If no filter value is provided, skip this key
      if (!filters[key]) return true;

      // If the key does not exist in the item, filter does not match
      if (!Object.prototype.hasOwnProperty.call(item, key)) return false;

      // Handle properties that are arrays
      if (Array.isArray(item[key])) {
        // Type assertion to unknown[] is safe here since we only compare values via includes
        return (item[key] as unknown[]).includes(filters[key]);
      }

      // For non-array values, compare by converting both values to lowercase strings
      const itemValue = String(item[key]).toLowerCase();
      const filterValue = String(filters[key]).toLowerCase();
      return itemValue.includes(filterValue);
    });

    return matchesSearch && matchesFilters;
  });
};
