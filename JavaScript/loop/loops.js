/* ## Challenge: Sum of n

MVP:
Create a function with a for loop that will add all the numbers up to n

You should create a variable to set the upper limit of your loop
Your loop should increment by 1 on each iteration
Your loop should print the final result

```
sum(10) => 55
``` */

console.log("Challenge 1: ");

function sum(num) {
  let result = 0;
  for (let i = 0; i <= num; ++i) {
    result += i; //0 + 0 = 0 -> 0 + 1 = 1 -> 1+2=3 -> 3+3=6 -> 6+4=10 -> ...
  }
  return result;
}
let result = sum(10);
console.log("sum(10) = ", result);

/* ## Challenge: Write a shopping list

MVP:
Create a function with a for loop that will add numbers to your shopping list

Store the following array in a variable
Your loop should iterate through every value in the array
Your loop should print a shopping list with the number and the name of the item

```
['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
=>
// In Console

1. milk
2. watermelon
3. eggs
4. soap
5. butter
6. apples
7. ice-cream
``` */

console.log("Challenge 2: ");

const shoppingList = [
  "milk",
  "watermelon",
  "eggs",
  "soap",
  "butter",
  "apples",
  "ice-cream",
];

let shoppingListLen = shoppingList.length;

const addNumber = (array) => {
  const arrayNumbered = [];
  for (let i = 0; i < array.length; ++i) {
    arrayNumbered[i] = `${i}. ` + array[i];
  }
  return arrayNumbered;
};

result = addNumber(shoppingList);
console.log("shopping list numbered: \n", result);

/* ## Challenge: Capitalizing Odd Positioned Letters

MVP
Create a variable with a string of your choice
Loop through the letters in this string and build a new string
If the current index is odd, capitalize the letter before adding it to the new string
Bonus
If the current index is even increment the letter
E.g: a becomes b, d becomes e, t becomes u
Final: z becomes a */

console.log("Challenge 3: ");
const myName = "Oscar NGUYENzzzzzz";

let nameTransformed = "";

for (let i = 0; i < myName.length; i++) {
  let letter = myName[i].toLowerCase();
  if (i % 2 !== 0) {
    //if index is odd number
    letter = letter.toUpperCase();
  } else {
    // when index is even
    if (letter !== "z") {
      // convert letter to char code and +1 to the code value to increment the letter
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    } else {
      // since using char code, +1 from "z" becomes "{"" -> manually change "a" to "z"
      letter = "a";
    }
  }
  nameTransformed += letter;
}

result = nameTransformed;
console.log("Capitalizing Odd Positioned Letters: \n", result);

/* # Challenge: Removing Vowels

MVP
Create a variable with a string of your choice
Loop through the letters in this and build a new string
The new strings should be the same as the input with the vowels missing

```
E.g: calum => clm, rachel => rchl, martyna => mrtyn
```

Bonus
Keep vowels in the new strings if they are succeeded by the letters l, m, or r

```
E.g: calum => calum, rachel => rchel, martyna => martyn
``` */
console.log("Challenge 4: ");

function deleteVowels(string) {
  const vowels = ["a", "u", "e", "i", "o"];
  const LMR = ["l", "m", "r"];
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    letter = letter.toLowerCase();
    if (vowels.includes(letter)) {
      // when letter matches 1 of the vowels
      if (LMR.includes(string[i - 1])) {
        // when letter is succeeded by the letters l, m, or r
        letter = letter;
      } else {
        letter = "";
      }
    } else {
      letter = letter;
    }
    newString += letter;
  }
  return newString;
}

result = deleteVowels("martyna");

console.log("deleteVowels('martyna'): ", result);

/* ## Loop through an array backwards

Console.log() every element from the array
 */
console.log("Challenge 5: ");

const array = [1, 2, 3, 4, 5];
let arrayBackward = [];

for (let i = array.length - 1; i >= 0; i--) {
  // start i at last index number = 4
  // each iteration, i = i - 1
  // run until i < 0 -> i=-1
  arrayBackward.push(array[i]);
}

console.log(`${array} backward: `);
console.log(arrayBackward);
