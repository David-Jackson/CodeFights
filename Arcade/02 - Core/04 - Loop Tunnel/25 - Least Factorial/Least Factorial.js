function leastFactorial(n) {
    var index = 1;
    var k = 1;
    while (k < n) {
        index++;
        k *= index;
    }
    return k;
}
​