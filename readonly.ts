//* DEMO: Readonly Properties in TypeScript

//* 1. Basic readonly property
type User = {
  readonly id: number; //* id cannot be reassigned
  name: string;
};

let user: User = {
  id: 1,
  name: "Aman",
};

console.log(user.id);
console.log(user.name);

//* user.id = 2; ❌ compile-time error (readonly)
//* user.name = "Raj"; ✅ allowed

//* 2. Readonly vs const
const account = {
  accountId: 101,
};

account.accountId = 202; //* allowed because const protects reference, not property
console.log(account.accountId);

//* 3. Readonly with optional properties
type Config = {
  readonly url: string;
  readonly timeout?: number; //* optional + readonly
};

let config1: Config = {
  url: "https://api.example.com",
};

console.log(config1.url);
console.log(config1.timeout);

//* config1.url = "https://hack.com"; ❌
//* config1.timeout = 5000; ❌

//* 4. Readonly arrays
let numbers: readonly number[] = [1, 2, 3];

console.log(numbers[0]);

//* numbers.push(4); ❌
//* numbers[0] = 10; ❌

//* 5. Shallow readonly behavior
type Profile = {
  age: number;
};

type Person = {
  readonly id: number;
  profile: Profile;
};

let person: Person = {
  id: 10,
  profile: {
    age: 25,
  },
};

console.log(person.id);
console.log(person.profile.age);

//* person.id = 20; ❌ readonly blocks reassignment
person.profile.age = 30; //* allowed because readonly is shallow

console.log(person.profile.age);

//* 6. Readonly in function parameters
function printUser(u: { readonly id: number; name: string }) {
  console.log(u.id);
  console.log(u.name);

  //* u.id = 999; ❌
}

printUser({ id: 5, name: "Vineet" });

//* 7. Why readonly is compile-time only
let hack: any = user;
hack.id = 999; //* runtime mutation still possible

console.log(user.id); //* changed at runtime

//* END OF READONLY PROPERTIES DEMO
