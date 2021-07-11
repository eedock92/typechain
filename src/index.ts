interface Human {
  name: string;
  age?:number;
  gender?:string;
}

const name = "byungsoo",
      age = 24,
      gender = "male";


const person = {
  name : "nick",
  gender: "male",
  age: 22
}

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

//const sayHi: {name: string, age: number, gender: string} => void
//sayHi("Nicolas", 24, "male");

//yarn add tsc-watch --dev

//sayHi(name, age);

console.log(sayHi(person))

export {};
