function candles(candlesNumber, makeNew) {
    var count = 0;
    var leftover = 0;
    while (candlesNumber > 0) {
        count++;
        leftover++;
        candlesNumber--;
        if (makeNew == leftover) {
            candlesNumber++;
            leftover = 0;
        }
    }
    return count;
}
​