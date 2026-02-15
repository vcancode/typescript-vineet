//* =====================================================
//* DEMO: Nullish Coalescing (??) in TypeScript
//* =====================================================

//* -----------------------------------------------------
//* 1. WHAT NULLISH COALESCING IS
//* -----------------------------------------------------

//* ?? returns the right-hand value ONLY if the left-hand value
//* is null or undefined

let a: number | null = null;
let b = a ?? 10;
console.log(b); //* 10

//* -----------------------------------------------------
//* 2. PROBLEM WITH || OPERATOR
//* -----------------------------------------------------

let count = 0;

//* || checks falsy values (0, "", false)
let wrongDefault = count || 100;
console.log(wrongDefault); //* 100 ❌ incorrect

//* ?? checks only null or undefined
let correctDefault = count ?? 100;
console.log(correctDefault); //* 0 ✅ correct

//* -----------------------------------------------------
//* 3. WHAT VALUES TRIGGER ??
//* -----------------------------------------------------

console.log(null ?? "fallback");       //* "fallback"
console.log(undefined ?? "fallback");  //* "fallback"

console.log(0 ?? 100);                 //* 0
console.log(false ?? true);            //* false
console.log("" ?? "text");             //* ""

//* -----------------------------------------------------
//* 4. BASIC DEFAULT VALUE USAGE
//* -----------------------------------------------------

let username: string | undefined;

let displayName = username ?? "Guest";
console.log(displayName); //* Guest

username = "Vineet";
displayName = username ?? "Guest";
console.log(displayName); //* Vineet

//* -----------------------------------------------------
//* 5. NULLISH COALESCING WITH OPTIONAL PROPERTIES
//* -----------------------------------------------------

type User = {
  name: string;
  age?: number;
};

let user1: User = { name: "Aman" };
let user2: User = { name: "Raj", age: 0 };

let age1 = user1.age ?? 18;
let age2 = user2.age ?? 18;

console.log(age1); //* 18
console.log(age2); //* 0 (0 is a valid value)

//* -----------------------------------------------------
//* 6. CHAINING ?? OPERATORS
//* -----------------------------------------------------

let value = undefined ?? null ?? "final value";
console.log(value); //* final value

//* -----------------------------------------------------
//* 7. USING ?? WITH FUNCTIONS
//* -----------------------------------------------------

function getScore(): number | undefined {
  return undefined;
}

let score = getScore() ?? 50;
console.log(score); //* 50

//* -----------------------------------------------------
//* 8. OPTIONAL CHAINING + NULLISH COALESCING
//* -----------------------------------------------------

type Address = {
  city?: string;
};

type Person = {
  name: string;
  address?: Address;
};

let person: Person = { name: "Vineet" };

let city = person.address?.city ?? "Unknown";
console.log(city); //* Unknown

//* -----------------------------------------------------
//* 9. OPERATOR PRECEDENCE RULE
//* -----------------------------------------------------

//* ❌ Mixing ?? with || or && without parentheses is not allowed
//* let result = a || b ?? c; ❌

//* Correct way
let result = (false || null) ?? "default";
console.log(result); //* default

//* -----------------------------------------------------
//* 10. WHAT NOT TO DO
//* -----------------------------------------------------

//* let bad = value || "fallback"; ❌ when 0/false/"" are valid
//* Confusing ?? with optional chaining ❌

//* -----------------------------------------------------
//* ONE-LINE RULES (MEMORIZE)
//* -----------------------------------------------------

//* ?? checks only null and undefined
//* || checks all falsy values
//* ?? is for defaults, ?. is for safe access

//* =====================================================
//* END OF NULLISH COALESCING NOTES
//* =====================================================
