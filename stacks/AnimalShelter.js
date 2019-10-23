const LinkedList = require('../linked-lists/LinkedList');

class AnimalShelter {
    catQueue;
    dogQueue;

    constructor() {
        this.catQueue = new LinkedList();
        this.dogQueue = new LinkedList();
    }

    enqueue(animal) {
        if (animal.type === AnimalType.DOG) {
            this.dogQueue.add(animal);
        }
        if (animal.type === AnimalType.CAT) {
            this.catQueue.add(animal);
        }
    }

    dequeueAny() {
        if (this.dogQueue.head.val.arrivalTime > this.catQueue.head.val.arrivalTime) {
            return this.dogQueue.remove();
        } else {
            return this.catQueue.remove();
        }
    }

    dequeueDog() {
        return this.dogQueue.remove();
    }

    dequeueCat() {
        return this.catQueue.remove();
    }
}

class Animal {
    name;
    type;
    arrivalTime;
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.arrivalTime = Date.now();
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, AnimalType.DOG);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, AnimalType.CAT);
    }
}

const AnimalType = Object.freeze({
    DOG: 'dog',
    CAT: 'cat'
});


const shelter = new AnimalShelter();

const animals = [
    'Daryl',
    'Carl',
    'Dingo',
    'Carlos',
    'Dylan',
    'Cheryl',
    'Dizzo',
    'Chris'
];

for (let i=0; i<animals.length; i++) {
    setTimeout(() => {
        shelter.enqueue(i%2 === 0 ? new Dog(animals[i]) : new Cat(animals[i]));
    }, 10*i);
}
setTimeout(() => {
    console.log(shelter.dequeueCat());
    console.log(shelter.dequeueDog());
    console.log(shelter.dequeueAny());
    console.log(shelter.dequeueAny());
    console.log(shelter.dequeueAny());
}, 10*(animals.length+1));