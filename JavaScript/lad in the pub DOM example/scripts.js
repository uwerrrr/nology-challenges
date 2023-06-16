/* # Lad in the pub  */

/* 1. Create a function that takes 3 parameters (age, country level of drunk) and returns a string or a boolean that says if someone can enter the pub or not (drunk above 3 is too much) */
/* can enter when: 
      age >= 21 in US 
      age >= 18 for other countries
      level of drunk <= 3 
*/

const checkIfAllowed = (age, country, levelOfDrunk) => {
  return (
    ((country === "USA" && age >= 21) || (country !== "USA" && age >= 18)) &&
    levelOfDrunk <= 3
  );
};

