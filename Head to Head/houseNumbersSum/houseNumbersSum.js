function houseNumbersSum(inputArray) {
​
  var numberSum = 0,
      i = 0,
      x;
  do {
    x =  inputArray.shift() ;
    numberSum += x;
  } while (x !== 0);
  return numberSum;
}
​