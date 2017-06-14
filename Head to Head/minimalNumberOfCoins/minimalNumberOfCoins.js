function minimalNumberOfCoins(coins, price) {
​
  var result = 0;
​
  for (var i = coins.length - 1; i >= 0; i--) {
    result +=  Math.floor(price / coins[i]) ;
    price %= coins[i];
  }
​
  if (price) {
    return -1;
  }
  return result;
}
​