type User={
    name:string;
    age?:number
}

const obj:User={
    name:"vineet",
}

//? age will be undefined 

//! optional chaining 

console.log(obj.age?.toFixed(2)); // ! prints age to fixed to 2 decimal places only if it exists otherwise if i dont chain then error will come 

type Scores = {
  [key: string]: number;
};

let marks: Scores = {
  math: 90,
  physics: 85
}; //? i can add any stuff i want but type should be satisfied

