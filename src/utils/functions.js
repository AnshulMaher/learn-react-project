export const getUpdatedArray = (arr, itemIdToUpdate, updatedValue) =>
  arr.map((item) => (item.id === itemIdToUpdate ? { ...item, value: updatedValue } : item));
