const number =  [1, 2, 3];
const newNumber = [number, 4];
const newNumbers = [...number, 4];

console.log("2 arrays ", newNumber)
console.log("1 array",newNumbers)

const person = {
    name : 'Fajar'
}

const newPerson = {
    ...person,
    age:24
}

console.log(newPerson)

const filter = (...args) =>{
    return args.filter(el => el === 1)
}

console.log(filter(1,2,3));