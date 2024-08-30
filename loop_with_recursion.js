function filterByUserId(index, receipts, userId) {
  if (index < receipts.length) {
      const filtered = filterByUserId(index + 1, receipts, userId); // Recursive call

      const receipt =receipts[index];
      if (receiptuserId === userId) {
          return [receipt].concat(filtered); // Add the current receipt if it matches
      }

      return filtered // If it doesn't match, return the filtered result
  }

  return []; // Base case: when the end of the array is reached
}

const receipts = [
  { userId: 1, amount: 50 },
  { userId: 2, amount: 75 },
  { userId: 1, amount: 100 },
  { userId: 2, amount: 150 }
];

const result = filterByUserId(0, receipts, 2);

console.log(result);
