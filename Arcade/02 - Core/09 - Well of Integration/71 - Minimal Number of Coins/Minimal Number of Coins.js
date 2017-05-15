function minimalNumberOfCoins(coins, price) {
    var count = 0;
    var maxAmount = coins.pop();
    while (price > 0) {
         while (price < maxAmount && coins.length > 0) {
             maxAmount = coins.pop();
         } 
        price -= maxAmount;
        count++;
    }
    return count;
}
​