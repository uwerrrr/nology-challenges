/* This challenge build upon previous knowledge and introduces the use of objects */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that takes a furniture object from the catalogue and returns its price
 *
 * furniture = {
 *  name: "lack",
 *  price: 6
 * }
 *
 * @param {{name: string, price: number}} furniture - A piece of furniture from the catalogue
 * @return {number} The price of the piece of furniture
 */
export const getFurniturePrice = (furniture) => {
  const { price } = furniture;
  return price;
};

/**
 * A function to attach to a store location to a furniture object from the catalogue
 *
 * @param {{name: string, price: number}} furniture - A piece of furniture from the catalogue
 * @param {string} location - A store location to attach to a piece of furniture
 * @returns {{name: string, price: number, location: string}} furniture - A furniture object from the catalogue
 */
export const setFurnitureStoreLocation = (furniture, location) => {
  //// first solution
  // const { name, price } = furniture;
  // const updatedFurniture = { name, price, location };
  // return updatedFurniture;

  //// better solution
  const updatedFurniture = { ...furniture }; // clone an Object
  updatedFurniture.location = location; // add new property to the Object
  return updatedFurniture;
};

/**
 * A function which takes a selection of arguments relating to a space ship and uses them
 * to create a space ship object
 *
 * @param {string} name The name of the space ship
 * @param {number} noOfSeats The number of seat of the space ship
 * @param {string} engineType The type of engine in the space ship
 * @param {boolean} canTravelSolarSystems The ability for the space ship to travel to different solar systems
 * @returns {{name: string, noOfSeats: number, engineType: string, canTravelSolarSystems: boolean}} spaceship - The space ship object
 */
export const makeSpaceship = (
  name,
  noOfSeats,
  engineType,
  canTravelSolarSystems
) => {
  return { name, noOfSeats, engineType, canTravelSolarSystems };
};

/* Intermediate Challenges */

/**
 * A function that will attach a username to a user but only if the user doesn't already have one
 *
 * @param {{name: string, username?: string}} user - A user object
 * @param {string} username - A username to attach
 * @returns {{name: string, username: string}} User - The user object with the same username or a new one
 */
export const setUserName = (userObj, username) => {
  //// First solution
  // const userArr = Object.entries(userObj);
  // console.log("userArr1: ", userArr); // userArr = [['name', 'value'], ['username', 'value']]
  // if (!userArr[1]) {
  //   userArr.push(["username", username]);
  // }
  // console.log("userArr2: ", userArr);
  // return Object.fromEntries(userArr);

  //// Better solution
  if (userObj.username) {
    return userObj;
  } else {
    const updatedUserObj = { ...userObj }; // clone object
    updatedUserObj.username = username; // add username property
    return updatedUserObj;
  }
};

/**
 * A function which takes a customer object from the database and returns the same object where the name has been
 * split into first and last name and reattached to the object
 *
 * @param {{fullName: string,}} customer A customer object from the database
 * @returns {{fullName: string, firstName: string, lastName: string}} A customer object from the database with the name separated into first and last
 */
export const splitFullNameToFirstAndLast = (customer) => {
  const { fullName } = customer; // destructuring Obj
  const separateNames = fullName.split(" "); // turns into array

  const [firstName, lastName] = separateNames; // destructuring Arr
  const updatedCustomer = { fullName, firstName, lastName };

  return updatedCustomer;
};
/**
 * A function which access a given key on an object
 *
 * HELPFUL RESOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 *
 * @param {object} object An object with some key value pairs (Not important what they are)
 * @param {string} key A key to access on the object
 * @returns {any} value - The value you have accessed on the object
 */
export const accessGivenKey = (object, key) => {
  return object[`${key}`];
};

/* Advanced Challenges */

/**
 * A function which takes a user object, accesses it's address and returns it as a string to print onto a shipping label
 * "4 Privet Drive Little Whinging Surrey CR3 0AA"
 *
 * @param {{id: number, name: string, address: {line1: string, line2: string, city: string, postcode: string}}} user - A user object from the database
 * @returns {string} An address string for a shipping label
 */
export const getUserAddress = (user) => {
  const { address } = user;
  const addressValArr = Object.values(address);
  const addressStr = addressValArr.join(" ");
  return addressStr;
};

/**
 * A function that given a customer for the restaurant with a list of known allergies and a list of allergens in an
 * array, will attach an array of allergens safe for the customer to eat to the customer object and return it
 *
 * @param {{id: number, name: string, allergies: string[]}} customer - A customer for the restaurant
 * @param {string[]} allergenList - A list of all known allergens
 * @return {{id: number, name: string, allergies: string[], safeAllergens: string[]}} customer
 */
export const setSafeAllergens = (customer, allergenList) => {
  const { allergies } = customer;

  const safe = allergenList.filter((item) => {
    return !allergies.includes(item);
  }); //filters allergiesList array to keep only the ones that are not on allergies array
  // console.log(safe);
  customer.safeAllergens = safe;
  // console.log(customer.safeAllergens);

  return customer;
};

/* Expert Challenge */

/**
 * A function which takes two objects which hold different information about the same piece of furniture, merges them
 * and returns it. You should do this WITHOUT modifying the original pieces of data
 *
 * @param {{id: number, location: string, sku: string}} furnitureLocationData - All of the data about the furnitures location in the store
 * @param {{id: number, name: string, price: number, isAvailable: boolean}} furnitureProductData - All of the data about the furniture product
 * @returns {{id: number, location: string, sku: string, name: string, price: number, isAvailable: boolean}}
 */
export const mergeFurniture = (furnitureLocationData, furnitureProductData) => {
  /* Write code here */

  const { id, ...rest } = furnitureLocationData;

  return { ...rest, ...furnitureProductData }; // ... -> spread out the values, without it, will be nested Obj
};
