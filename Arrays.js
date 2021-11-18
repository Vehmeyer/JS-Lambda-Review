const array = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
  ];

// access first item in array

console.log(array[0]);

// access last item in array

console.log(array[array.length - 1]);

// .length - returns number of items in array

array.length 

// .push() - adds item to end of array and returns new length

array.push()

// .pop() - removes last item of array and returns the "popped" item

array.pop()

// .unshift() - adds item to beginning of array

array.unshift()

// .shift() - removes item from beginning of array

array.shift()

// .forEach() - iterates through each item in array

array.forEach(function(item) {
    return item.key;
});

array.forEach(item => item.key);

// .map() - converts array into new array

const newArray = array.map(function(item){
    return item.key.toLowerCase();
});

const newArray = array.map(item => item.key.toLowerCase());

// .reduce() - returns a single value from array, can use for multiplication or addition

const singleValue = array.reduce(function(accumulator, item){
    return accumulator + item;
}, 0); 
    // input 0 for addition, 1 for multiplication

const singleValue = array.reduce((accumulator, item) => {
    return accumulator + item;
}, 0);

// .filter() - filters array based on something that is true or false

const newArray = array.filter(function(item){
    return item.population > 10;
});

const newArray = array.filter(item => item.population > 10);

// other array methods
    // .find()
    // .findIndex()
    // .includes()


// function to add object to array

const addObjectToArray = function(array, property1, property2, property3) {
    array.push({property1, property2, property3});
    return array;
};

const addObjectToArray = (array, property1, property2, property3) => {
    array.push({property1, property2, property3});
    return array;
};

// loop over array of objects and push properties/data to new array

const newArray = [];
for (let i = 0; i < array.length - 1; i++) {
    if (array[i].property === "WHAT YOU'RE SEARCHING FOR") {
        newArray.push(array[i].property);
    }
}

