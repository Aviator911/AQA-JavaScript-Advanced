// Таск 1: Створення об'єкта `automationQA`
const automationQA = {};

automationQA.programmerName = "John";
automationQA.programmingLanguages = "JavaScript";
automationQA.age = 30;
automationQA.languages = ["English", "Spanish", "French"];
automationQA.preferences = { basicPreferences: "table" };

console.log(automationQA);

// Таск 2: Робота з об'єктом `room`
const room = {
  name: "Living Room",
  size: 200,
  window: true,
};

console.log(room.name);
console.log(room.window);

// Таск 3: Робота з об'єктом `movie`
const movie = {
  title: "The Matrix",
  releaseYear: 1999,
  genre: "Science Fiction",
};

movie.genre = "Action";
movie.title = "Inception";
movie.actors = { mainRole: "Keanu Reeves", supportingRole: "Carrie-Anne Moss" };
movie.director = "Christopher Nolan";
delete movie.title;

console.log(movie);

// Таск 4: Робота з масивом об'єктів `englishBooks`
const englishBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
];

for (let i = 0; i < englishBooks.length; i++) {
  if (englishBooks[i].title === "The Great Gatsby") {
    continue;
  }
  if (englishBooks[i].year > 1940) {
    console.log(`${englishBooks[i].title} (${englishBooks[i].year})`);
  }
  if (englishBooks[i].author === "George Orwell") {
    englishBooks[i].author = "New Author";
  }
}

console.log(englishBooks);

// Таск 5: Робота з вкладеним об'єктом
const nestedObject = {
  property1: "Value 1",
  property2: "Value 2",
  nested: {
    innerProperty1: "Nested Value 1",
    innerProperty2: "Nested Value 2",
  },
};

for (let key in nestedObject) {
  if (typeof nestedObject[key] === "object") {
    for (let innerKey in nestedObject[key]) {
      console.log(`${innerKey}: ${nestedObject[key][innerKey]}`);
    }
  } else {
    console.log(`${key}: ${nestedObject[key]}`);
  }
}

// Таск 6: Робота з об'єктом `user`
const user = {
  name: "Alice",
  age: 28,
  email: "alice@example.com",
  address: {
    city: "New York",
    postalCode: "10001",
  },
};

function getUserInfo({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

function getFullAddress({ email, address: { city, postalCode } }) {
  console.log(`Email: ${email}`);
  console.log(`Address: ${city}, ${postalCode}`);
}

getUserInfo(user);
getFullAddress(user);
