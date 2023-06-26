// const btn = document.getElementsByClassName(["button", "button--important"]);

const user = "remi";
const userSessionRecentHistory = ["home", "settings", "home", "about"];
const combine = (username, history) => {
  return {
    username,
    history,
  };
};
const userHistory = combine(user, userSessionRecentHistory);

const myFunction = (arr) => {
  return arr.reduce((acc, value) => {
    return value ? ++acc : acc;
  }, 0);
};
console.log(myFunction(["do", 1, 2, 3, "do"]));

const coach = {};
coach.name = "Remi";
coach.age = 23;
coach.name = "Calum";
coach.age += 7;
console.log(coach); //

const getBreeds = async () => {
  const response = await fetch("https://catfact.ninja/breeds");
  return await response.json();
};

console.log();

const drawCards = (n = 10) => {
  const cards = [];
  while (cards.length < n) {
    let card = Math.floor(Math.random() * 13) + 1;
    card += suits[Math.floor(Math.random() * 4)];
    if (cards.includes(card)) continue;
    cards.push(card);
  }
  return cards;
};

const count = arr.reduce((acc, curr, i, arr) => {
  if (curr === arr[i + 1]) {
    ++acc;
  }
}, 0);
