class Human{
    constructor(){
        this.gender ='male';
    }
    printGender(){
        console.log(this.gender);
    }
}
class Person extends Human{
    constructor(){
        super();
        this.name = 'Max';
        this.gender = 'female';
    }
    printMyName(){
        console.log(this.name)
    }
}
class Human1{
    genders ='male';
    printGenders = () => {
        console.log(this.genders);
    }
}

class Persons extends Human1{
    constructor(){
        super();
        this.name = 'Max';
        this.genders = 'female';
    }
    printMyNames(){
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();
person.printGender();

const persons = new Persons();
persons.printMyNames();
persons.printGenders();