class Animal {
    constructor(name, classification, habitat) {
        this.name = name;
        this.classification = classification;
        this.habitat = habitat;
    }

    eat() {
        console.log(`${this.name} is now eating...`);
    }

    // Static methods can be called even without instantiating the class.
    static sleep() {
        console.log('This animal is sleeping in 3 seconds...');
        setTimeout(() => {
            console.log('Zz Zz Zz Zz');
        }, 3000);
    }
}

let dog = new Animal('dog', 'mammal', 'land');
dog.eat();

// Animal.sleep();

/**
 * A class that inherits the Animal class
 */

class Cat extends Animal {
    constructor(sound) {
        super('cat', 'mammal', 'land');
        this.sound = sound;
    }

    talk() {
        for (let i = 0; i < 4; i++) {
            console.log(`${this.sound}...`);
        }
    }
}

const pusheen = new Cat('Meow');
pusheen.talk();

// A member class can inherit it's parent class's properties and methods.
pusheen.eat();
