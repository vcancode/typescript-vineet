// 1. Primitive Types
let num: number = 42;
let str: string = "TypeScript";
let bool: boolean = true;

console.log(num);
console.log(str);
console.log(bool);

// 2. null & undefined
let n: null = null;
let u: undefined = undefined;

console.log(n);
console.log(u);

// 3. any
let anything: any = 10;
anything = "hello";
anything = true;

console.log(anything);

// 4. unknown
let value: unknown = "unknown value";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

//? unknown is more safe than any

// 5. void (function returns nothing)
function logMessage(msg: string): void {
  console.log(msg);
}

logMessage("This is void");

// 6. never (function never returns)
function throwError(): never {
  throw new Error("Program crashed");
}
// DO NOT CALL throwError()

// 7. object
let obj: { id: number; name: string } = {
  id: 1,
  name: "Aman"
};

console.log(obj);

// 8. array
let numbers: number[] = [1, 2, 3];
console.log(numbers);

// 9. tuple
let person: [string, number] = ["Ravi", 21];
console.log(person);

// 10. union type
let id: number | string;
id = 101;
console.log(id);
id = "A101";
console.log(id);

// 11. literal type
let Status: "success" | "error";
Status = "success";
console.log(Status);

// 12. enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Left;
console.log(move);

// 13. type alias
type User = {
  username: string;
  age: number;
};

let user: User = {
  username: "vineet",
  age: 20
};

console.log(user);

// 14. readonly property
type Car = {
  readonly model: string;
};

let car: Car = { model: "BMW" };
console.log(car.model);

// 15. optional property
type Student = {
  name: string;
  marks?: number;
};

let s1: Student = { name: "Raj" };
console.log(s1.marks);

// 16. optional chaining + nullish coalescing
let result = s1.marks?.toFixed(2) ?? "No marks";
console.log(result);
