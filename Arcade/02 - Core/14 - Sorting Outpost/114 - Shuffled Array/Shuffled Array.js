function shuffledArray(shuffled) {
    var arrSum = shuffled.reduce(function(a, b){
        return a + b;
    }, 0) / 2;
    shuffled.splice(shuffled.indexOf(arrSum), 1);
    return shuffled.sort(function(a, b) {
        return a > b;
    });
}
​