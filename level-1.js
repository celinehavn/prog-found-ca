// Question 1 *
var name = "Celine";

// Question 2 *
var person = {
  gender: "Female",
  age: 39
};

// Question 3
var outOfStock = false;

if(outOfStock === true) {
  console.log("Out of stock");
}
else {
  console.log("In stock");
}

// Question 4
var numbers =[1, 2, 3, 4, 5];

for(var index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

// Question 5 * counter or index?
for(var counter = 15; counter <= 25; counter++) {
  console.log(counter);
}


// Question 6 *
for(var counter = 15; counter <= 25; counter++) {
    if(counter === 20 ){
      console.log(counter);
    }
}

// Question 7
var person = [

  {
    name: "Ida",
    age: 24,
    thePersonIsAWoman: true
  },

  {
    name: "Arild",
    age: 61,
    thePersonIsAWoman: false
  }
];

for(var index = 0; index < person.length; index++) {

  console.log(person[index].age);
  console.log(person[index].thePersonIsAWoman);
}

// Question 8

function whatIDontLike(food) {
  console.log("I don't like " + food);
}

whatIDontLike("Smoked salmon");

// Question 9
function subtract(number1, number2) {
  var results = number2 - number1;

  console.log(results);
}

// Question 10
var array = [];

function addAThingInTheArray(thing) {
  array.push(thing);
}

addAThingInTheArray("Something");
