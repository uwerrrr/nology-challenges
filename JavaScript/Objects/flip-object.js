// Swap keys with values

const translate = {
  apple: "jablko",
  pear: "gruszka",
  strawberry: "truskawka",
};

/* const newObj = {
    jablko: "apple",
    gruszka: "pear",
    truskawka: "strawberry"
} */

function flipKeysAndValues(obj) {
  const entries = Object.entries(obj); // returns array of arrays [[key, val],[key, val], [key, val]]
  console.log("entries: ", entries);
  //   ["apple", "jablko"],
  //   ["pear", "gruszka"],
  //   ["strawberry", "truskawka"];

  const flippedEntries = entries.map((entry) => entry.reverse());
  console.log("flipped entries: ", flippedEntries);
  //   [ 'jablko', 'apple' ],
  //   [ 'gruszka', 'pear' ],
  //   [ 'truskawka', 'strawberry' ]

  const output = Object.fromEntries(flippedEntries); // returns object from array of arrays
  console.log("output: ", output);

  return output;
}

// const swapKeys = (obj) => {
//   const keyArr = Object.keys(obj);
//   const valueArr = Object.values(obj);

//   return valueArr.reduce((result, value, index) => {
//     result[value] = keyArr[index];
//     console.log(result, "result");
//     console.log(value, "value");
//     return result;
//   }, {});
// };

// const person = {
//   firstName: "martyna",
// };

// person.lastName = "Krol";

console.log("translate: ", translate);
console.log(flipKeysAndValues(translate));
// console.log(swapKeys(translate));
