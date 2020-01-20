// Question 1
for(var counter = 15; counter <= 25; counter++) {
  if (counter%2 === 0) {
    console.log(counter);
  }
}

// Question 2
function speak() {
  console.log("I am a function");
}

var innerFunction = speak;

function outerFunction (argument) {
  argument();
}

outerFunction(innerFunction);
