const user = {
    username: 'joe.smith',
    password: 'abc123',
    lovesJavascript: true,
    favoriteNumber: 23,
};

// access value in object

    // dot notation
user.favoriteNumber;

    // bracket notation - must use string, number or variable, useful if you have keys with spaces in them 
user['favoriteNumber'];

// for...in loop

for (let key in user){
    console.log(user[key]);
};

// .keys() - creates an array that contains the properties of an object



// .values() - creates an array that contains the values of every property in an object



// .entries() - creates an array of arrays, each inner array has two items - first item is the property; second item is the value

const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
  }
  
  const entries = Object.entries(fruits)
  console.log(entries)
  // [
  //   [apple, 28],
  //   [orange, 17],
  //   [pear, 54]
  // ]

// spread operator - [...object] => creates copy of object

const newObject = [...object];

// function to create an object

const createObject = function(newObject, property1, property2, property3) {
    newObject = {property1, property2, property3};
    return newObject;
}

const createObject = (newObject, property1, property2, property3) => {
    newObject = {property1, property2, property3};
    return newObject;
}