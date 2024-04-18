// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)


let multiArray = [];
multiArray.push([]);
multiArray.push([]);
multiArray.push([]);
console.log(multiArray); // Output: [[], [], []]


// 2. Declare and initialize a multidimensional array
// representing the following matrix:

let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log(matrix);


// 3. Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.



let tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
let tableLength = parseInt(prompt("Enter the length of the table:"));

if (isNaN(tableNumber) || isNaN(tableLength)) {
    console.log("Please enter valid numbers.");
} else {
    console.log(`Multiplication table for ${tableNumber}:`);
    for (let i = 1; i <= tableLength; i++) {
        console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
    }
}


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// a. Counting: 1, 2, 3, ..., 15
document.write("<b>Counting:</b> ");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");

// b. Reverse counting: 10, 9, 8, ..., 1
document.write("<b>Reverse counting:</b> ");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");

// c. Even: 0, 2, 4, ..., 20
document.write("<b>Even:</b> ");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// d. Odd: 1, 3, 5, ..., 19
document.write("<b>Odd:</b> ");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// e. Series: 2k, 4k, 6k, ..., 20k
document.write("<b>Series:</b> ");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}



//  7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:



let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter the item you want to search:");
userInput = userInput.toLowerCase();
let found = false;
for (let i = 0; i < A.length; i++) {
    let currentItem = A[i].toLowerCase();
    if (currentItem === userInput) {
        console.log(`${userInput} is available at index ${i} in our Bakery.`);
        found = true;
        break;
    }
}
if (!found) {
    console.log(`We are sorry, ${userInput} is not available in our Bakery.`);
}



// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


let a = [24, 53, 78, 91, 12];

let largestNumber = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > largestNumber) {
        largestNumber = a[i];
    }
}
console.log("The largest number in the array is:", largestNumber);


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


let b = [24, 53, 78, 91, 12];
let smallestNumber = b[0];
for (let i = 1; i < b.length; i++) {
    if (b[i] < smallestNumber) {
        smallestNumber = b[i];
    }
}
console.log("The smallest number in the array is:", smallestNumber);



// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

console.log("Multiples of 5 from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}



