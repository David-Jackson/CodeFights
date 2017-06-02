function firstNotDivisible(divisors, start) {
    while (!divisibleByAll(start, divisors)) {
        start++;
    }
    return start;
}
​
function divisibleByAll(num, arr) {
    for (var i in arr) {
        if (num % arr[i] == 0) return false;
    }
    return true;
}