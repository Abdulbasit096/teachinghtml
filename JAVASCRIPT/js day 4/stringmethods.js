let marks = "80";
// Convert String to Number
// console.log(typeof marks)
let numMarks = Number(marks);
// console.log(typeof numMarks)
let title = "Basit";

// String Methods
// Replace -- replace the provided value with the existing value presented
let newTitle1 = title.replace("t", "m");
console.log(newTitle1);

// Split -- Convert string to array
let newTitle2 = title.split("");
console.log(newTitle2)

// Length -- Gives the length of the string  -> for eg: pass should be more than 8 chars 
let newTitle4 = title.length
console.log(newTitle4)
// To lowercase
let newTitle5 = title.toLowerCase()
console.log(newTitle5)
// To uppercase
let newTitle6 = title.toUpperCase()
console.log(newTitle6)

// Includes -- Tells if the certain character exsist in the string -> for eg: check if the email string contains @ 
let email = 'basit@gmail.com'
if(email.includes('@')){
    console.log('Correct')
}else{
    console.log('Wrong email try again')
}
let newTitle7 = title.includes('s')
console.log(newTitle7)

// Sub string // Basit -> 0: B , 1: a , 2: s , 3: i -- breaks the string by the given index positions that is beginning and the ending positions but it excludes the ending position and returns a new string.
let newTitle8 = title.substring(1,3)
console.log(newTitle8)

// Slice -> same as substring but it does not return a completely new string
let newTitle9 = title.slice(1,3) 
console.log(newTitle9)

// Index of -- Returns the index of the provided character -> Find out the company by email by using indexOf and substr
let newTitle10 = title.indexOf('s')
console.log(newTitle10)

let posOfAtr = email.indexOf('@')
let posofDot = email.indexOf('.')
let provider = email.substring(posOfAtr+1,posofDot)
if(provider === 'gmail'){
    console.log('Google')
}else if(provider === 'outlook'){
    console.log('Microsoft');
}else{
    console.log('Apple')
}


// repeat -- Repeats the string by given number of times -> Ecommerce star ratings
let rating = 4
let starRatings = '⭐'.repeat(rating)
console.log(starRatings)
