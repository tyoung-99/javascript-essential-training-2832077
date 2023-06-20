/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const testArray = ["itemA", "itemC", "itemB", "itemE", "itemD"];
console.log(testArray);

const last = testArray.pop();
console.log(testArray);

testArray.unshift(last);
console.log(testArray);

testArray.sort();
console.log(testArray);

const found = testArray.find((item) => item === "itemB");
console.log(found);
console.log(testArray);

const foundIndex = testArray.indexOf(found);
testArray.splice(foundIndex, 1);
console.log(testArray);
