const person = {
    name: "Samir",
    age: 27,
    greet() {
        console.log("Hi, I am " + this.name)
    }
};
const copiedPerson = {...person};
const {name, age} = person;
console.log(age);
const hobbies = ['Sports', 'Cooking', 'Fencing'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
for (let hobby of hobbies) {
    console.log(hobby)
};

const printName = ({name}) => {
    console.log(name)
}

printName(person);
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
hobbies.push('Programming')
console.log(hobbies);
person.greet();

const copiedArray = [...hobbies];
console.log(copiedArray);
console.log(copiedPerson);

const toArray = (...args) => {return args};

console.log(toArray(1, 2, 3, 4))