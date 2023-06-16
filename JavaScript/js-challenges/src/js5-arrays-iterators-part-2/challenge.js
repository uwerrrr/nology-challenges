/* JS5 builds on the previous challenges and adds the use of MORE Array iterators, Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * A function that uses the REDUCE array iterator to total an array of scores.
 * The scores will be numbers.
 *
 * @param {number[]} numberArr [7, 7, 6, 2, 3, 2, 3]
 * @return {number} 30
 */

export const totalScoresArr = (scoresArr) => {
  const totalScore = scoresArr.reduce((acc, curr) => acc + curr);
  return totalScore;
};

/**
 * A function that turns a string into an array and uses a ARRAY ITERATOR to reverse it.
 * It will need to keep spaces between words.
 * Once reversed it will need to turn the array back into a string.
 *
 * @param {string} toReverse "reverse"
 * @return {string} "esrever"
 */

export const reverseString = (toReverse) => {
  const toReverseArr = toReverse.split("");
  // console.log(toReverseArr);
  const reversedArr = toReverseArr.reduce((acc, curVal) => {
    // console.log(acc);
    acc.unshift(curVal);
    return acc;
  }, []);
  const reversedStr = reversedArr.join("");
  return reversedStr;
};

/**
 * A function that arranges an array of characters alphabetically.
 * Each character will need to be lowercase.
 * A to Z case insensitive.
 *
 * @param {string[]} charcterArr ["X", "B", "B", "b", "g", "l", "n", "x"]
 * @return {string[]} ["b", "b", "b", "g", "l", "n", "x", "x"]
 */

export const sortCharactersAlphabetically = (characterArr) => {
  const charArrLow = characterArr.map((char) => char.toLowerCase());
  const sortedCharArrLow = [...charArrLow].sort();

  return sortedCharArrLow;
};

/**
 * Intemediate Challenges
 */

/**
 * A function that arranges an array of numbers highest to the lowest number.
 *
 * @param {number[]} numberArr [6, 9, 55, 2, 9190, .5]
 * @return {number[]} [9190, 55, 9, 6, 2, 0.5]
 */

export const sortNumbersHighToLow = (numberArr) => {
  const sortedNumArr = [...numberArr].sort((a, b) => b - a);
  return sortedNumArr;
};

/**
 * A function that checks if a given item is 'instock'.
 * You have been given a 'stocklist' in the function body.
 *
 * If the item is in the stocklist you need to return its index in the following string format.
 * "ITEM is instock, it is on aisle INDEX."
 *
 * If the item is not in the stocklist you need to return the following string format.
 * "Sorry ITEM is not instock."
 *
 * @param {string} toCheck orange
 * @return {string} "orange is instock, it is on aisle 2."
 */

export const checkItemInstock = (toCheck) => {
  const stockList = [
    "apple",
    "banana",
    "orange",
    "coconut",
    "strawberry",
    "lime",
    "grapefruit",
    "lemon",
    "kumquat",
    "blueberry",
    "melon",
  ];

  /* first solution */
  // const itemIndex = stockList.findIndex((stock) => stock === toCheck);
  // // returns founded index or -1 if not found

  // switch (itemIndex) {
  //   case -1:
  //     return `Sorry ${toCheck} is not instock.`;
  //   // break;

  //   default:
  //     const foundedItem = stockList[itemIndex];
  //     return `${foundedItem} is instock, it is on aisle ${itemIndex}.`;
  // }

  /* second solution */
  return stockList.includes(toCheck)
    ? `${toCheck} is instock, it is on aisle ${stockList.indexOf(toCheck)}.`
    : `Sorry ${toCheck} is not instock.`;
};

/**
 * A function that takes an array of colours and checks if EVERY colour is a primary colour.
 * The primary colours are ["red", "blue", "yellow"].
 * It will return true if they are ALL primary.
 * It will return false if they are NOT ALL primary.
 *
 * @param {string[]} coloursArr ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
 * @return {boolean} false
 */

export const checkPrimaryColours = (coloursArr) => {
  const primaryColours = ["red", "blue", "yellow"];
  const areAllrimaryColours = coloursArr.every((colour) =>
    primaryColours.includes(colour)
  );
  return areAllrimaryColours;
};

/**
 * Advanced Challenges
 */

/**
 * A function that takes a strings and checks to see if it is a palindrome.
 * PALINDROME - a word, phrase, or sequence that reads the same backwards as forwards.
 * It will return true or false depending if it is a palindrome or not.
 *
 * @param {string} stringOne racecar
 * @return {boolean} true
 */

export const checkStringPalindrome = (stringOne) => {
  /* first solution */
  // const reversedString = stringOne.split("").reverse().join("");
  // // split into array -> reverse the chars -> join to a reversed string

  // return stringOne === reversedString;

  /* second solution - more efficient solution */
  let head = 0;
  let tail = stringOne.length - 1;

  let isPalindrome = true;

  while (head < tail) {
    // only need to check half of each word
    if (stringOne.charAt(head) === stringOne.charAt(tail)) {
      head++;
      tail++;
    } else {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

/**
 * A function that totals a nested array of scores arrays.
 * It only needs to total each nested array.
 * e.g. [[1, 2], [2, 3]] = [3, 5]
 * The scores will be numbers.
 *
 * @param {number[]} numberArr [[7, 7, 6], [2, 3, 2], [3]]
 * @return {number[]} [20, 7, 3]
 */

export const totalNestedScoresArr = (nestedScoresArr) => {
  const totalScoresArr = nestedScoresArr.reduce((totalScores, scores) => {
    // look into each scores array [7,7,6] of nested scores array [[7, 7, 6], [2, 3, 2]]
    const totalScore = scores.reduce(
      // look into each score 7 of scores array [7,7,6]
      (totalScore, score) => (totalScore += score),
      0
    ); // totalScore = total1
    totalScores.push(totalScore); // totalScores = [total1, total2, total3]
    return totalScores;
  }, []);
  return totalScoresArr;
};

/**
 * Expert Challenge
 */

/**
 * This is the same challenge as advanced JS4, can you implement it differently.
 * Can you complete this challenge using the REDUCE iterator?
 *
 * A function that takes a string and creates a simple encrypted message.
 *
 * The string will be broken into 3 lists.
 * The first three letters will go into their own list.
 * The next three letters will follow this pattern.
 * Joining the first three letters in each of their list.
 * The rest of the letter's will follow this pattern.
 * Each list will be joined together and returned as an encrypted message.
 *
 * The word "encrypted" would be broken into:
 *
 * e r t
 * n y e
 * c p d
 *
 * and joined together as ert + nye + cpd
 *
 * @param {string} toEncrypt "encrypted"
 * @return {string} "ertnyecpd"
 */

export const encryptString = (toEncrypt) => {
  // const encryptedMessage = toEncrypt
  //   .split("")
  //   .reduce((acc, char, index) => {
  //     const groupIndex = index % 3; // group index = 0, 1 or 2
  //     if (!acc[groupIndex]) {
  //       // if group not exist yet <=> acc[2] = false -> create acc[2] = ""
  //       acc[groupIndex] = "";
  //     }
  //     console.log(acc);

  //     acc[groupIndex] += char; // e.g. acc[2] = "c" + "p" = "cp"

  //     return acc; // i.e. acc = ['ert', 'nye', 'cpd']
  //   }, [])
  //   .join(""); // <=> "ert"+"nye"+"cpd"

  // return encryptedMessage;


  /* second solution */
  return toEncrypt
    .split("")
    .reduce(
      (acc, curr, i) => {
        const index = i % 3;
        acc[index].push(curr);
        return acc;
      },
      [[], [], []]
    )
    .flat() // transform 
    .join("");


};
