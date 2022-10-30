let nam = "Samir";

console.log(nam);

const naming = 'Samir'; //unchanging variable
let age = 27 //mutable variable
let HasHobbies = true;

const summariseUser = (name, age, hobby) => {
    return "name is " + name 
    + ", age is " + age + 
    ", hobby is " + hobby
}

const add = (a, b) => a + b;
const addOne = a => a + 1;
console.log(summariseUser(naming, age, HasHobbies));