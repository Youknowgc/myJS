// Sets are particularly useful when you need to ensure that a collection of items contains no duplicates 
// and when you need efficient lookups.


const mySet = new Set([1, 2, 3]);
mySet.add(4);
mySet.add(2); // Duplicate, will be ignored
console.log(mySet.has(3)); // true
mySet.delete(1);
console.log(mySet);
console.log(mySet.size); // 3
for (let item of mySet) {
  console.log(item); // 2, 3, 4
}
