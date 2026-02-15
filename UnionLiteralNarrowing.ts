//* =====================================================
//* DEMO: Union Types & Literal Types in TypeScript
//* =====================================================

//* -----------------------------------------------------
//* 1. BASIC UNION TYPES
//* -----------------------------------------------------

//* Union type allows ONE of multiple types
let id: number | string;

id = 101;
console.log(id);

id = "A101";
console.log(id);

//* id = true; ❌ not allowed

//* -----------------------------------------------------
//* 2. WHY UNION TYPES NEED NARROWING
//* -----------------------------------------------------

function printValue(value: number | string) {
  //* value.toFixed(2); ❌ not allowed without narrowing

  if (typeof value === "number") {
    console.log(value.toFixed(2)); //* number branch
  } else {
    console.log(value.toUpperCase()); //* string branch
  }
}

printValue(10);
printValue("hello");

//* -----------------------------------------------------
//* 3. UNION TYPES WITH OBJECTS
//* -----------------------------------------------------

type SuccessResult = {
  status: "success";
  data: string;
};

type ErrorResult = {
  status: "error";
  message: string;
};

type Result = SuccessResult | ErrorResult;

function handleResult(result: Result): void {
  if (result.status === "success") {
    console.log(result.data);
  } else {
    console.log(result.message);
  }
}

handleResult({ status: "success", data: "Data loaded" });
handleResult({ status: "error", message: "Something went wrong" });

//* -----------------------------------------------------
//* 4. COMMON MISTAKE WITH UNION TYPES
//* -----------------------------------------------------

//* Union means OR, not AND
let value: number | string = 10;
//* value.toUpperCase(); ❌ not safe

//* -----------------------------------------------------
//* 5. BASIC LITERAL TYPES
//* -----------------------------------------------------

//* Literal type allows ONLY exact values
let direction: "left" | "right";

direction = "left";
console.log(direction);

//* direction = "up"; ❌ invalid literal

//* -----------------------------------------------------
//* 6. WHY LITERAL TYPES ARE USEFUL
//* -----------------------------------------------------

//* Prevents magic strings and typos
type Status = "idle" | "loading" | "success" | "error";

let currentStatus: Status = "loading";
console.log(currentStatus);

//* currentStatus = "done"; ❌ not allowed

//* -----------------------------------------------------
//* 7. LITERAL TYPES WITH NUMBERS
//* -----------------------------------------------------

type Dice = 1 | 2 | 3 | 4 | 5 | 6;

let roll: Dice = 6;
console.log(roll);

//* roll = 7; ❌ not allowed

//* -----------------------------------------------------
//* 8. UNION + LITERAL = DISCRIMINATED UNION
//* -----------------------------------------------------

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

type Shape = Circle | Square;

function area(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.side * shape.side;
  }
}

console.log(area({ kind: "circle", radius: 5 }));
console.log(area({ kind: "square", side: 4 }));

//* -----------------------------------------------------
//* 9. WHY DISCRIMINATED UNIONS ARE SAFE
//* -----------------------------------------------------

//* The `kind` property is a literal
//* It allows TypeScript to narrow the union automatically

//* -----------------------------------------------------
//* 10. WHAT NOT TO DO
//* -----------------------------------------------------

//* let badStatus: string; ❌ too loose
//* let badResult: any; ❌ unsafe

//* -----------------------------------------------------
//* ONE-LINE RULES (MEMORIZE)
//* -----------------------------------------------------

//* Union = one of many types
//* Literal = one exact value
//* Discriminated union = safe branching logic

//* =====================================================
//* END OF UNION & LITERAL TYPES NOTES
//* =====================================================
