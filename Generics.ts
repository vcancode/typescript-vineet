//* =====================================================
//* DEMO: Generics in TypeScript
//* Covers:
//* 1. Generic Functions
//* 2. Generic Constraints
//* 3. Generic Types (type & interface)
//* =====================================================

//* -----------------------------------------------------
//* 1. GENERIC FUNCTION (BASIC)
//* -----------------------------------------------------

//* Generic function preserves the input type
function identity<T>(value: T): T {
  return value;
}

let numResult = identity(10);        //* T inferred as number
let strResult = identity("hello");   //* T inferred as string

console.log(numResult);
console.log(strResult);

//* numResult.toUpperCase(); ❌ not allowed
//* strResult.toUpperCase(); ✅ allowed

//* -----------------------------------------------------
//* 2. GENERIC FUNCTION WITH ARRAY
//* -----------------------------------------------------

//* Returns first element of array while preserving type
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let firstNum = firstElement([1, 2, 3]);
let firstStr = firstElement(["a", "b", "c"]);

console.log(firstNum); //* number | undefined
console.log(firstStr); //* string | undefined

//* -----------------------------------------------------
//* 3. WHY GENERICS ARE BETTER THAN any
//* -----------------------------------------------------

function badIdentity(value: any) {
  return value;
}

let bad = badIdentity(10);
bad.toUpperCase(); //* runtime error possible

//* Generic version avoids this problem

//* -----------------------------------------------------
//* 4. GENERIC CONSTRAINTS (extends)
//* -----------------------------------------------------

//* Constraint ensures T has a length property
function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

logLength("hello");      //* string has length
logLength([1, 2, 3]);   //* array has length
//* logLength(10); ❌ number has no length

//* -----------------------------------------------------
//* 5. GENERIC CONSTRAINT WITH OBJECT KEYS
//* -----------------------------------------------------

//* K must be a key of T
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let user = {
  name: "Aman",
  age: 20,
};

let userName = getProperty(user, "name");
let userAge = getProperty(user, "age");

console.log(userName);
console.log(userAge);

//* getProperty(user, "id"); ❌ invalid key

//* -----------------------------------------------------
//* 6. GENERIC TYPE ALIAS
//* -----------------------------------------------------

//* Generic type alias holds any value type
type Box<T> = {
  value: T;
};

let numberBox: Box<number> = { value: 100 };
let stringBox: Box<string> = { value: "TypeScript" };

console.log(numberBox.value);
console.log(stringBox.value);

//* -----------------------------------------------------
//* 7. GENERIC INTERFACE
//* -----------------------------------------------------

//* Common real-world pattern (API response)
interface ApiResponse<T> {
  data: T;
  error: string | null;
}

let userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Raj", age: 25 },
  error: null,
};

console.log(userResponse.data.name);
console.log(userResponse.error);

//* -----------------------------------------------------
//* 8. GENERIC TYPES WITH MULTIPLE PARAMETERS
//* -----------------------------------------------------

type Pair<K, V> = {
  key: K;
  value: V;
};

let pair1: Pair<number, string> = { key: 1, value: "one" };
let pair2: Pair<string, boolean> = { key: "isAdmin", value: true };

console.log(pair1);
console.log(pair2);

//* -----------------------------------------------------
//* 9. GENERICS VS UNION TYPES
//* -----------------------------------------------------

//* Union version (limited, loses precision)
function wrapUnion(value: number | string) {
  return value;
}

//* Generic version (flexible, precise)
function wrapGeneric<T>(value: T): T {
  return value;
}

let u = wrapUnion(10);      //* number | string
let g = wrapGeneric(10);   //* number

console.log(u);
console.log(g);

//* -----------------------------------------------------
//* 10. IMPORTANT RULES (MEMORIZE)
//* -----------------------------------------------------

//* Generics preserve type information
//* Constraints restrict what T can be
//* Generics exist only at compile time
//* Prefer generics over any
//* Use unions when values are limited, generics when types should adapt

//* =====================================================
//* END OF GENERICS NOTES
//* =====================================================
