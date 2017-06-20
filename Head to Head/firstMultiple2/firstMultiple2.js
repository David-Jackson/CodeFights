function firstMultiple2(divisors, start) {
    while (true) {
        for (var i in divisors) {
            if (start % divisors[i] == 0) return start;
        }
        start++;
    }
}
​