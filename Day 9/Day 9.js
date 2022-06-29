const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
countries.forEach((country) => console.log(country));

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
names.forEach((name) => console.log(name));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => console.log(number));

const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare);

const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesHaveSixCharacters = countries.filter(
  (country) => country.length === 6
);
console.log(countriesHaveSixCharacters);

const countriesGreaterThanSix =
