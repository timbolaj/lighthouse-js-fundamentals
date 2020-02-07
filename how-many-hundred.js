function howManyHundreds(number) {
  return (number - (number % 100)) / 100;
}
console.log(howManyHundreds(101));
console.log(howManyHundreds(200));