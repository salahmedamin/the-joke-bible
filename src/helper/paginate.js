export const paginate = (arr, start, size) =>
  Array.isArray(arr)
    ? arr.filter((_, i) => i >= start && i < start + size)
    : [];
