function ageCalculator(name, yearOfBirth, currentYear) {
  let ageOfPerson = currentYear - yearOfBirth;
  return name + ' is ' + ageOfPerson + ' years old.';
}
const susan = ageCalculator('susan', 1920, 2020);
console.log(susan);