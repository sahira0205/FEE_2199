// Define the custom iterator
function createNumberIterator(start, end) {
  let current = start;
  const iterator = {
    // Symbol.iterator is required for any custom iterable
    [Symbol.iterator]() {
      return this;
    },
    // The next method is required to iterate through the items
    next() {
      if (current <= end) {
        return { value: current++, done: false }; // Return the current number and move to next
      } else {
        return { value: undefined, done: true }; // End of iteration
      }
    }
  };
  return iterator;
}

// Create an iterator that will iterate from 1 to 5
const numberIterator = createNumberIterator(1, 5);

// Using the iterator with a for...of loop
for (let num of numberIterator) {
  console.log(num); // Output: 1, 2, 3, 4, 5
}
