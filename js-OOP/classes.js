// Таск 3
class ProductClass {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.price * this.quantity;
    }
  
    purchase(quantity) {
      if (this.quantity >= quantity) {
        this.quantity -= quantity;
        console.log(`Purchased ${quantity} ${this.name}(s)`);
        console.log(`Remaining quantity: ${this.quantity}`);
      } else {
        console.log(`Not enough ${this.name}(s) in stock.`);
      }
    }
  }
  
  const tShirt = new ProductClass("T-shirt", 20, 100);
  const shoes = new ProductClass("Shoes", 50, 50);
  const jeans = new ProductClass("Jeans", 30, 75);
  
  console.log(`Total price of T-shirt: $${tShirt.getTotalPrice()}`);
  console.log(`Total price of Shoes: $${shoes.getTotalPrice()}`);
  console.log(`Total price of Jeans: $${jeans.getTotalPrice()}`);
  
  tShirt.purchase(5);
  shoes.purchase(60);
  jeans.purchase(20);
  
  // Таск 4
  class CarClass {
#speed
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.#speed = 0;
    }
  
    getCarInfo() {
      return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
  
    accelerate(speed) {
      this.speed += speed;
    }
  
    brake(speed) {
      this.speed -= speed;
    }
  }
  
  class AudiClass extends CarClass {
#color
    constructor(make, model, year, color) {
      super(make, model, year);
      this.#color = color;
    }
  
    getCarInfo() {
      return `${super.getCarInfo()}, Color: ${this.color}`;
    }
  }
  
  const myAudi = new AudiClass("Audi", "A4", 2022, "Black");
  console.log(myAudi.getCarInfo());
  myAudi.accelerate(60);
  myAudi.brake(20);
  console.log(myAudi.getCarInfo());
  
  // Таск 5
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  
  class PeopleRegistry extends Person {
    constructor() {
      super();
      this.people = [];
    }
  
    addPerson(person) {
      this.people.push(person);
    }
  
    removePerson(firstName, lastName) {
      this.people = this.people.filter(
        (person) => person.firstName !== firstName || person.lastName !== lastName
      );
    }
  
    findPerson(firstName, lastName) {
      return this.people.find(
        (person) => person.firstName === firstName && person.lastName === lastName
      );
    }
  
    listPeople() {
      this.people.forEach((person) => {
        console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
      });
    }
  }
  
  const registry = new PeopleRegistry();
  const person1 = new Person("John", "Doe", 30);
  const person2 = new Person("Jane", "Smith", 25);
  registry.addPerson(person1);
  registry.addPerson(person2);
  registry.listPeople();
  
  const foundPerson = registry.findPerson("John", "Doe");
  console.log(foundPerson);
  
  registry.removePerson("John", "Doe");
  registry.listPeople();