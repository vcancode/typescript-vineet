//* DEMO: Object Types in TypeScript

//* 1. Basic object type with fixed shape
let user: { id: number; name: string } = {
  id: 1,
  name: "Aman",
};

console.log(user.name);

//* 2. Object type using interface (recommended for models)
interface Product {
  readonly id: number; //* readonly property
  name: string;
  price?: number; //* optional property
}

let p1: Product = {
  id: 101,
  name: "Book",
};

console.log(p1.name);
console.log(p1.price); //* undefined because optional

//* 3. Optional chaining on optional property
console.log(p1.price?.toFixed(2));

//* 4. Using nullish coalescing with optional property
let displayPrice = p1.price ?? "Price not available";
console.log(displayPrice);

//* 5. Nested object with optional properties
type Order = {
  orderId: number;
  customer?: {
    name: string;
    address?: {
      city: string;
    };
  };
};

let order: Order = {
  orderId: 5001,
};

console.log(order.customer?.address?.city); //* safe access, no crash

//* 6. Excess property check (direct object literal)
interface User {
  name: string;
}

let u1: User = {
  name: "Raj",
  //* age: 20  // ❌ would cause error if uncommented
};

console.log(u1.name);

//* 7. Excess property allowed via intermediate variable
let tempUser = {
  name: "Raj",
  age: 20,
};

let u2: User = tempUser; //* allowed due to structural typing
console.log(u2.name);

//* 8. Index signature (dynamic object keys)
type Scores = {
  [subject: string]: number;
};

let marks: Scores = {
  math: 90,
  physics: 85,
};

console.log(marks.math);

//* 9. Demonstrating why `object` type is dangerous
let bad: object = { x: 10 };
//* bad.x ❌ not allowed, shape is unknown

//* 10. Correct replacement for `object`
let good: { x: number } = { x: 10 };
console.log(good.x);

//* 11. Function accepting object type
function printUser(u: { name: string; age?: number }) {
  console.log(u.name);
  console.log(u.age ?? "Age not provided");
}

printUser({ name: "Vineet" });
printUser({ name: "Vineet", age: 20 });

//* END OF OBJECT TYPES DEMO
