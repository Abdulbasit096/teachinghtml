// Diff vars
// Arrays
// Objs
let items = ["A", "B", "C", "D", "E"];
let students = {
  name: "Basit",
  age: 20,
  marks: 90,
};
console.log(students.age);

// Loops -- for repeatitive tasks
// FOR LOOP

for(let i = 0; i < items.length; i++){
    console.log(i) // 0 
    console.log(items[i]) // items[i] -> items[1] -> A 
}

let x = 0
while(x < items.length){
    console.log(items[x])
    x++
}


// Game  

// Guess game
 

// User will give an input -> a number between 0 and 10
// Check that user has provided a number greater or equal to 0 than 10 and lesser than 10
// A variable to generate a randome number between 0 and 10
// If number is equal random -> You guessed it correct
// IF numebr is lesser -> A lil too high
// If number is higher ->  A little low

let userInput = prompt('Enter a number between 1 and 10') // User Input
let random = Math.floor(Math.random() * 10) // To generate random number
console.log(random) 


