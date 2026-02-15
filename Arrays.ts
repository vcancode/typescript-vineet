//* =====================================================
//* UPDATED DEMO: Arrays in TypeScript (Methods + Returns)
//* =====================================================

//* 1. Basic array declaration
let nums: number[] = [1, 2, 3];
console.log(nums);

//* =====================================================
//* NON-MUTATING METHODS (DO NOT CHANGE ORIGINAL ARRAY)
//* =====================================================

//* map() → returns a NEW array of same length
let mappedResult: number[] = nums.map(n => n * 2);
console.log(mappedResult); //* [2, 4, 6]
console.log(nums);         //* original unchanged

//* filter() → returns a NEW filtered array
let filteredResult: number[] = nums.filter(n => n % 2 === 0);
console.log(filteredResult); //* [2]

//* slice() → returns a NEW array
let sliceResult: number[] = nums.slice(0, 2);
console.log(sliceResult); //* [1, 2]

//* concat() → returns a NEW merged array
let concatResult: number[] = nums.concat([4, 5]);
console.log(concatResult); //* [1,2,3,4,5]

//* =====================================================
//* MUTATING METHODS (CHANGE ORIGINAL ARRAY)
//* =====================================================

//* push() → returns NEW LENGTH (number)
let pushResult: number = nums.push(4);
console.log(pushResult); //* 4
console.log(nums);       //* [1,2,3,4]

//* pop() → returns REMOVED ELEMENT or undefined
let popResult: number | undefined = nums.pop();
console.log(popResult); //* 4
console.log(nums);      //* [1,2,3]

//* unshift() → returns NEW LENGTH
let unshiftResult: number = nums.unshift(0);
console.log(unshiftResult); //* 4
console.log(nums);          //* [0,1,2,3]

//* shift() → returns REMOVED ELEMENT or undefined
let shiftResult: number | undefined = nums.shift();
console.log(shiftResult); //* 0
console.log(nums);        //* [1,2,3]

//* splice() → returns ARRAY of removed elements
let spliceResult: number[] = nums.splice(1, 1);
console.log(spliceResult); //* [2]
console.log(nums);         //* [1,3]

//* =====================================================
//* ITERATION METHODS
//* =====================================================

//* forEach() → returns void (nothing)
let forEachResult: void = nums.forEach(n => {
  console.log(n);
});
console.log(forEachResult); //* undefined

//* reduce() → returns SINGLE accumulated value
let reduceResult: number = nums.reduce((acc, curr) => acc + curr, 0);
console.log(reduceResult); //* sum

//* =====================================================
//* SEARCH & CHECK METHODS
//* =====================================================

//* find() → returns ELEMENT or undefined
let findResult: number | undefined = nums.find(n => n > 1);
console.log(findResult);

//* findIndex() → returns INDEX (number), -1 if not found
let findIndexResult: number = nums.findIndex(n => n === 3);
console.log(findIndexResult);

//* includes() → returns boolean
let includesResult: boolean = nums.includes(3);
console.log(includesResult);

//* some() → returns boolean
let someResult: boolean = nums.some(n => n > 2);
console.log(someResult);

//* every() → returns boolean
let everyResult: boolean = nums.every(n => n > 0);
console.log(everyResult);

//* =====================================================
//* SORTING (SPECIAL CASE)
//* =====================================================

//* sort() → returns REFERENCE TO SAME ARRAY (mutates)
let sortNums: number[] = [10, 2, 30];
let sortResult: number[] = sortNums.sort((a, b) => a - b);
console.log(sortResult); //* [2,10,30]
console.log(sortNums);   //* same array mutated

//* =====================================================
//* READONLY ARRAYS
//* =====================================================

let readonlyNums: readonly number[] = [1, 2, 3];

//* readonlyNums.push(4); ❌
//* Non-mutating methods still return new arrays

let readonlyMapResult: number[] = readonlyNums.map(n => n * 10);
console.log(readonlyMapResult);

//* =====================================================
//* TUPLE VS ARRAY RETURNS
//* =====================================================

let tuple: [string, number] = ["Vineet", 20];
let tupleSlice = tuple.slice(0, 1); //* returns (string | number)[]
console.log(tupleSlice);

//* =====================================================
//* END OF UPDATED ARRAY NOTES
//* =====================================================
