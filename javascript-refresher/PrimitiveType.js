const number = 1;
const num2 = number;

console.log(num2);


console.log();

const person = {
    name: 'Fajar'
};
const secondPerson = person;
person.name = 'Arif';
console.log(secondPerson);

const thirdPerson = {
    ...person,
    age : 24
};

person.name = 'Kurniawan'

console.log(thirdPerson);