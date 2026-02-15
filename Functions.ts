//* =====================================================
//* DEMO: Functions in TypeScript (Notes + Examples)
//* =====================================================

//* 1. Basic function with parameter and return type
function add(a: number, b: number): number {
  return a + b;
}

let addResult: number = add(2, 3);
console.log(addResult); //* 5

//* -----------------------------------------------------

//* 2. Return type inference (TypeScript infers number)
function multiply(a: number, b: number) {
  return a * b;
}

let multiplyResult = multiply(3, 4);
console.log(multiplyResult); //* 12

//* -----------------------------------------------------

//* 3. Function with no return value (void)
function logMessage(msg: string): void {
  console.log(msg);
}

let voidResult: void = logMessage("Hello TS");
console.log(voidResult); //* undefined

//* -----------------------------------------------------

//* 4. Function type stored in a variable
let operation: (x: number, y: number) => number;

operation = (a, b) => a + b;
let opResult = operation(5, 6);
console.log(opResult); //* 11

//* -----------------------------------------------------

//* 5. Optional parameters (become T | undefined)
function greet(name: string, age?: number): void {
  console.log(name);
  console.log(age);
}

greet("Vineet");
greet("Vineet", 20);

//* -----------------------------------------------------

//* 6. Default parameters (implicitly optional)
function power(base: number, exp: number = 2): number {
  return base ** exp;
}

console.log(power(5));    //* 25
console.log(power(5, 3)); //* 125

//* -----------------------------------------------------

//* 7. Function using object type
function printUser(user: { name: string; age?: number }): void {
  console.log(user.name);
  console.log(user.age ?? "Age not provided");
}

printUser({ name: "Aman" });
printUser({ name: "Aman", age: 22 });

//* -----------------------------------------------------

//* 8. Function type using type alias (recommended)
type AddFn = (a: number, b: number) => number;

let addFn: AddFn = (x, y) => x + y;
console.log(addFn(10, 20)); //* 30

//* -----------------------------------------------------

//* 9. Rest parameters (always an array)
function sum(...nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

let sumResult = sum(1, 2, 3, 4);
console.log(sumResult); //* 10

//* -----------------------------------------------------

//* 10. Function overloads (compile-time behavior)
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any) {
  return a + b;
}

console.log(combine(1, 2));       //* 3
console.log(combine("a", "b"));   //* ab
//* combine(1, "a"); ❌ compile-time error

//* -----------------------------------------------------

//* 11. Function returning never (never completes)
function crash(): never {
  throw new Error("Something went wrong");
}
//* crash(); ❌ do not call (program stops)

//* -----------------------------------------------------

//* 12. Function assignability (parameter rules)
let fn: (x: number) => void;

fn = (a: number) => {
  console.log(a);
};

//* fn = (a: number, b: number) => {}; ❌ extra parameter not allowed

fn(10);

//* -----------------------------------------------------

//* 13. Arrow function with explicit return type
let subtract = (a: number, b: number): number => {
  return a - b;
};

console.log(subtract(10, 3)); //* 7

//* -----------------------------------------------------

//* END OF FUNCTION NOTES
//* =====================================================
