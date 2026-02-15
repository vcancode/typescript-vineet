//* =====================================================
//* DEMO: Type Narrowing & Type Guards in TypeScript
//* =====================================================

//* -----------------------------------------------------
//* 1. WHY TYPE NARROWING IS NEEDED
//* -----------------------------------------------------

function printValue(value: number | string) {
  //* value.toFixed(2); ❌ not allowed without narrowing

  if (typeof value === "number") {
    //* narrowed to number
    console.log(value.toFixed(2));
  } else {
    //* narrowed to string
    console.log(value.toUpperCase());
  }
}

printValue(10);
printValue("hello");

//* -----------------------------------------------------
//* 2. NARROWING USING typeof (PRIMITIVES)
//* -----------------------------------------------------

function checkType(x: number | boolean) {
  if (typeof x === "number") {
    console.log(x + 10);
  } else {
    console.log(!x);
  }
}

checkType(5);
checkType(true);

//* -----------------------------------------------------
//* 3. NARROWING USING EQUALITY (null / undefined)
//* -----------------------------------------------------

function handleNull(value: string | null) {
  if (value === null) {
    console.log("Value is null");
  } else {
    console.log(value.toUpperCase());
  }
}

handleNull(null);
handleNull("typescript");

//* -----------------------------------------------------
//* 4. TRUTHY / FALSY NARROWING (USE CAREFULLY)
//* -----------------------------------------------------

function showText(text: string | undefined) {
  if (text) {
    //* narrowed, but empty string is skipped
    console.log(text.toUpperCase());
  } else {
    console.log("No text");
  }
}

showText(undefined);
showText("hi");

//* -----------------------------------------------------
//* 5. NARROWING USING 'in' OPERATOR (OBJECTS)
//* -----------------------------------------------------

type Admin = {
  role: "admin";
  accessLevel: number;
};

type NormalUser = {
  role: "user";
  name: string;
};

type Person = Admin | NormalUser;

function handlePerson(p: Person) {
  if ("accessLevel" in p) {
    //* narrowed to Admin
    console.log("Admin access:", p.accessLevel);
  } else {
    //* narrowed to NormalUser
    console.log("User name:", p.name);
  }
}

handlePerson({ role: "admin", accessLevel: 5 });
handlePerson({ role: "user", name: "Aman" });

//* -----------------------------------------------------
//* 6. NARROWING USING instanceof (CLASSES ONLY)
//* -----------------------------------------------------

class Dog {
  bark() {
    console.log("Bark");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

speak(new Dog());
speak(new Cat());

//* -----------------------------------------------------
//* 7. DISCRIMINATED UNION (BEST PRACTICE)
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
    //* automatically narrowed to Circle
    return Math.PI * shape.radius * shape.radius;
  } else {
    //* automatically narrowed to Square
    return shape.side * shape.side;
  }
}

console.log(area({ kind: "circle", radius: 5 }));
console.log(area({ kind: "square", side: 4 }));

//* -----------------------------------------------------
//* 8. BUILT-IN TYPE GUARDS SUMMARY
//* -----------------------------------------------------

//* typeof      → primitives
//* instanceof  → classes
//* in          → object properties

//* -----------------------------------------------------
//* 9. CUSTOM TYPE GUARD (IMPORTANT)
//* -----------------------------------------------------

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(val: unknown) {
  if (isString(val)) {
    //* val is now string
    console.log(val.toUpperCase());
  } else {
    console.log("Not a string");
  }
}

processValue("typescript");
processValue(123);

//* -----------------------------------------------------
//* 10. WHY TYPE GUARDS ARE NEEDED WITH unknown
//* -----------------------------------------------------

let data: unknown = "hello";

//* data.toUpperCase(); ❌ not allowed

if (isString(data)) {
  console.log(data.toUpperCase()); //* safe
}

//* -----------------------------------------------------
//* 11. WHAT NOT TO DO (DANGEROUS)
//* -----------------------------------------------------

//* function isNumber(x: any): x is number {
//*   return true; ❌ lies to TypeScript
//* }

//* -----------------------------------------------------
//* ONE-LINE RULES (MEMORIZE)
//* -----------------------------------------------------

//* Type narrowing reduces possible types
//* Type guards enable narrowing
//* Discriminated unions give safest narrowing

//* =====================================================
//* END OF TYPE NARROWING & TYPE GUARDS NOTES
//* =====================================================
