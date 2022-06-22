// Making a person object with nested objects, arrays, and functions.
let person = {
    firstName: "Tanner",
    lastName: "Williams",
    age: 32,
    favorites: {
        movies: {
            movie1: "LoTR",
            movie2: "Gladiator",
            movie3: "Braveheart",
        },
        artists: ["DT", "Haken", "Porcupine Tree"],
    },
    greeting: () => {
        console.log("Hello, there");
    }
}

// Practicing acessing key/value pairs in our object.
// console.log(person.favorites.movies.movie2);
// person.greeting();

// Destructuring practice.
let {age} = person;
// console.log(age);
// console.log(person.age);

let {firstName, lastName} = person;
// Same thing as above just written out in an easier way.
// let firstName = person.firstName;
// let lastName = person.lastName;
// console.log(firstName, lastName);

// For in loops.
// for (let property in person) {
//     console.log(`${property}: ${person[property]}`);
// }

// Classes practice.
class Animals {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }

    greeting() {
        console.log(`Hi, I am a ${this.species} and my name is ${this.name}`);
    }
}

class Mammals extends Animals {
    constructor(name, species, size, isHairy) {
        super(name, species, size);

        this.isHairy = isHairy;
    }
}

let hippo = new Mammals("Hip", "Hippopotamus", "Large", false);
hippo.greeting();

// let snake = new Animals("Snek", "Boa", "Big");

// console.log(snake);
// snake.greeting();